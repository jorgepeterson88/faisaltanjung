'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Package, Truck, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="FAISAL TANJUNG Logo" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-green-800">FAISAL TANJUNG</h1>
                <p className="text-xs text-gray-600">Perdagangan Bahan Makanan</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Beranda</a>
              <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Tentang Kami</a>
              <a href="#services" onClick={(e) => smoothScroll(e, 'services')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Layanan</a>
              <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Terms</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-green-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pb-4 border-t pt-4"
              >
                <div className="flex flex-col space-y-3">
                  <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Beranda</a>
                  <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Tentang Kami</a>
                  <a href="#services" onClick={(e) => smoothScroll(e, 'services')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Layanan</a>
                  <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Kontak</a>
                  <a href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Privacy</a>
                  <a href="/terms" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Terms</a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Terpercaya Sejak 2020
                </span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                FAISAL TANJUNG
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-3xl md:text-4xl text-green-600 mt-2"
                >
                  Mitra Terpercaya Bahan Makanan Anda
                </motion.span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Menyediakan berbagai bahan makanan berkualitas tinggi dengan harga kompetitif. 
                Dari pertanian langsung ke meja Anda, menjamin kesegaran dan kelezatan setiap produk.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Hubungi Kami</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Lihat Produk
                </motion.button>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <motion.div 
                animate={{ rotate: 3 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 rounded-2xl transform rotate-3"
              ></motion.div>
              <motion.img 
                src="/logo.png" 
                alt="FAISAL TANJUNG" 
                className="relative w-full h-96 object-contain bg-white rounded-2xl shadow-2xl p-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Tentang FAISAL TANJUNG</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah distributor terkemuka bahan makanan berkualitas di Kalimantan Barat
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
              >
                <Package className="w-10 h-10 text-green-600" />
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-900">Produk Berkualitas</h4>
              <p className="text-gray-600">
                Semua produk kami melalui quality control ketat untuk memastikan kualitas terbaik
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto"
              >
                <Truck className="w-10 h-10 text-yellow-600" />
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-900">Pengiriman Cepat</h4>
              <p className="text-gray-600">
                Jaringan distribusi luas memastikan produk sampai tepat waktu dengan kondisi prima
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto"
              >
                <Users className="w-10 h-10 text-blue-600" />
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-900">Pelayanan Prima</h4>
              <p className="text-gray-600">
                Tim profesional siap melayani kebutuhan bahan makanan Anda dengan sepenuh hati
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan bahan makanan bisnis Anda
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
              >
                <Package className="w-6 h-6 text-green-600" />
              </motion.div>
              <h5 className="text-lg font-semibold text-gray-900 mb-2">Beras Berkualitas</h5>
              <p className="text-gray-600 text-sm">Berbagai jenis beras premium dengan kualitas terjamin</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4"
              >
                <Award className="w-6 h-6 text-yellow-600" />
              </motion.div>
              <h5 className="text-lg font-semibold text-gray-900 mb-2">Bumbu Dapur</h5>
              <p className="text-gray-600 text-sm">Lengkap bumbu dapur segar dan berkualitas tinggi</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
              >
                <Truck className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h5 className="text-lg font-semibold text-gray-900 mb-2">Minyak Goreng</h5>
              <p className="text-gray-600 text-sm">Minyak goreng sehat dengan harga bersaing</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
              >
                <Users className="w-6 h-6 text-purple-600" />
              </motion.div>
              <h5 className="text-lg font-semibold text-gray-900 mb-2">Gula & Tepung</h5>
              <p className="text-gray-600 text-sm">Gula dan tepung berkualitas untuk kebutuhan dapur</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani kebutuhan bahan makanan Anda
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Alamat</h5>
                  <p className="text-gray-600">
                    DUSUN KARYA BHAKTI, Desa/Kelurahan Sepakat Baru<br />
                    Kec. Kubu, Kab. Kubu Raya, Provinsi Kalimantan Barat<br />
                    Kode Pos: 78391
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Telepon</h5>
                  <p className="text-gray-600">087729887781</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Email</h5>
                  <p className="text-gray-600">info@faisaltanjung.com</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <form className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <motion.textarea 
                    whileFocus={{ scale: 1.02 }}
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda..."
                  ></motion.textarea>
                </motion.div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Kirim Pesan</span>
                  <CheckCircle className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="FAISAL TANJUNG Logo" className="h-10 w-10 object-contain" />
                <h4 className="text-xl font-bold">FAISAL TANJUNG</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Mitra terpercaya untuk kebutuhan bahan makanan berkualitas tinggi di Kalimantan Barat.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Beras Premium</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bumbu Dapur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Minyak Goreng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gula & Tepung</a></li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4">Perusahaan</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#services" onClick={(e) => smoothScroll(e, 'services')} className="hover:text-white transition-colors">Layanan</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Condition</a></li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4">Ikuti Kami</h5>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
          >
            <p>&copy; 2024 FAISAL TANJUNG. Hak Cipta Dilindungi.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
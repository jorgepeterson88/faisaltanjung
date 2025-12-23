'use client';

import { useState, useEffect } from 'react';
import { Link } from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Cookie } from 'lucide-react';

export default function PrivacyPolicy() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="FAISAL TANJUNG Logo" className="h-10 w-10 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-green-800">FAISAL TANJUNG</h1>
                <p className="text-xs text-gray-600">Perdagangan Bahan Makanan</p>
              </div>
            </div>
            
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Kembali</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              FAISAL TANJUNG berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
            </p>
            <div className="mt-6 inline-block">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                Terakhir Diperbarui: 1 Januari 2024
              </span>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di FAISAL TANJUNG. Kami sangat menghargai kepercayaan Anda dalam menggunakan layanan perdagangan bahan makanan kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat Anda berinteraksi dengan kami.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini. Jika Anda tidak setuju dengan praktik-praktik ini, harap jangan gunakan layanan kami.
              </p>
            </section>

            {/* Information Collection */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <p className="text-gray-600 mb-2">Kami dapat mengumpulkan informasi pribadi berikut:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Nama lengkap dan informasi kontak (nomor telepon, email)</li>
                    <li>Alamat pengiriman dan penagihan</li>
                    <li>Informasi pembayaran dan transaksi</li>
                    <li>Informasi bisnis (untuk pelanggan korporat)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                  <p className="text-gray-600 mb-2">Kami secara otomatis mengumpulkan:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Alamat IP dan jenis perangkat</li>
                    <li>Informasi browser dan sistem operasi</li>
                    <li>Data penggunaan website</li>
                    <li>Cookies dan data pelacakan</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Bagaimana Kami Menggunakan Informasi</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Memproses Pesanan</h4>
                      <p className="text-gray-600 text-sm">Untuk memproses dan mengirimkan pesanan bahan makanan Anda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Layanan Pelanggan</h4>
                      <p className="text-gray-600 text-sm">Untuk memberikan dukungan dan menjawab pertanyaan Anda</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Peningkatan Layanan</h4>
                      <p className="text-gray-600 text-sm">Untuk menganalisis dan meningkatkan kualitas layanan kami</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Komunikasi</h4>
                      <p className="text-gray-600 text-sm">Untuk mengirimkan informasi produk dan penawaran khusus</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                FAISAL TANJUNG mengimplementasikan langkah-langkah keamanan yang komprehensif untuk melindungi informasi pribadi Anda:
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <UserCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Enkripsi data end-to-end untuk semua transaksi</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <UserCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Akses terbatas hanya untuk staf yang berwenang</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <UserCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Backup data reguler dan sistem monitoring 24/7</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <UserCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Kepatuhan terhadap standar keamanan industri</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Cookie className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Kebijakan Cookies</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna Anda. Cookies adalah file kecil yang disimpan di browser Anda.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Cookies Esensial</span>
                  <span className="text-sm text-green-600">Selalu Aktif</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Cookies Analitik</span>
                  <span className="text-sm text-gray-600">Opsional</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Cookies Pemasaran</span>
                  <span className="text-sm text-gray-600">Opsional</span>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai pengguna layanan kami, Anda memiliki hak-hak berikut terkait data pribadi Anda:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Akses</h4>
                  <p className="text-gray-600 text-sm">Hak untuk mengetahui data apa yang kami simpan tentang Anda</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Koreksi</h4>
                  <p className="text-gray-600 text-sm">Hak untuk memperbarui informasi pribadi yang tidak akurat</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Penghapusan</h4>
                  <p className="text-gray-600 text-sm">Hak untuk meminta penghapusan data pribadi Anda</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Portabilitas</h4>
                  <p className="text-gray-600 text-sm">Hak untuk mentransfer data Anda ke layanan lain</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-green-100 mb-6">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin mengeksekusi hak Anda, silakan hubungi kami:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">FT</span>
                  </div>
                  <div>
                    <p className="font-semibold">FAISAL TANJUNG</p>
                    <p className="text-green-100 text-sm">Perdagangan Bahan Makanan</p>
                  </div>
                </div>
                
                <div className="ml-11 space-y-2 text-green-100">
                  <p>📍 DUSUN KARYA BHAKTI, Sepakat Baru, Kubu, Kubu Raya, Kalimantan Barat 78391</p>
                  <p>📞 087729887781</p>
                  <p>📧 privacy@faisaltanjung.com</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/logo.png" alt="FAISAL TANJUNG Logo" className="h-8 w-8 object-contain" />
            <h4 className="text-lg font-bold">FAISAL TANJUNG</h4>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Mitra terpercaya untuk kebutuhan bahan makanan berkualitas tinggi
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Condition</Link>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6">
            <p className="text-gray-400 text-sm">
              &copy; 2024 FAISAL TANJUNG. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
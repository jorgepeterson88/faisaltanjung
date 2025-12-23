'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale, Clock, Users } from 'lucide-react';

export default function TermsCondition() {
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
              <FileText className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan layanan perdagangan bahan makanan FAISAL TANJUNG
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
                Selamat datang di FAISAL TANJUNG. Syarat dan Ketentuan ini mengatur penggunaan layanan perdagangan bahan makanan yang kami sediakan. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh menggunakan layanan kami.
              </p>
            </section>

            {/* Definitions */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Definisi</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">"Perusahaan"</h3>
                  <p className="text-gray-600">Merujuk pada FAISAL TANJUNG, usaha perdagangan bahan makanan yang beralamat di DUSUN KARYA BHAKTI, Sepakat Baru, Kubu, Kubu Raya, Kalimantan Barat.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">"Pelanggan"</h3>
                  <p className="text-gray-600">Merujuk pada individu atau entitas bisnis yang menggunakan layanan perdagangan bahan makanan kami.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">"Produk"</h3>
                  <p className="text-gray-600">Merujuk pada semua bahan makanan yang diperdagangkan oleh Perusahaan, termasuk tetapi tidak terbatas pada beras, bumbu dapur, minyak goreng, gula, dan tepung.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">"Layanan"</h3>
                  <p className="text-gray-600">Merujuk pada seluruh layanan perdagangan, pengiriman, dan dukungan pelanggan yang disediakan oleh Perusahaan.</p>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ketersediaan Produk</h3>
                  <p className="text-gray-600 mb-2">Perusahaan berusaha untuk menyediakan:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Beras berkualitas tinggi berbagai merek dan jenis</li>
                    <li>Bumbu dapur segar dan kemasan</li>
                    <li>Minyak goreng sehat dengan berbagai ukuran</li>
                    <li>Gula pasir dan gula aren berkualitas</li>
                    <li>Tepung terigu dan tepung beras</li>
                    <li>Bahan makanan lainnya sesuai permintaan pasar</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Layanan Pengiriman</h3>
                  <p className="text-gray-600 mb-2">Kami menyediakan layanan pengiriman dengan:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Cakupan wilayah Kubu Raya dan sekitarnya</li>
                    <li>Pengiriman tepat waktu sesuai jadwal</li>
                    <li>Kondisi produk terjamin saat sampai</li>
                    <li>Opsi pengiriman ekspres untuk kebutuhan mendesak</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Ordering and Payment */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Pemesanan dan Pembayaran</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Proses Pemesanan</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">1. Konsultasi:</span> Hubungi kami untuk diskusi kebutuhan</p>
                    <p className="text-gray-700"><span className="font-semibold">2. Penawaran:</span> Terima penawaran harga dan stok</p>
                    <p className="text-gray-700"><span className="font-semibold">3. Konfirmasi:</span> Konfirmasi pesanan dan jadwal pengiriman</p>
                    <p className="text-gray-700"><span className="font-semibold">4. Pembayaran:</span> Selesaikan pembayaran sesuai kesepakatan</p>
                    <p className="text-gray-700"><span className="font-semibold">5. Pengiriman:</span> Terima pesanan sesuai jadwal</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Metode Pembayaran</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Transfer Bank</h4>
                      <p className="text-gray-600 text-sm">Pembayaran melalui transfer ke rekening Perusahaan</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Tunai</h4>
                      <p className="text-gray-600 text-sm">Pembayaran tunai saat pengiriman (COD)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Syarat Pembayaran</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Pembayaran harus dilunasi sebelum atau saat pengiriman</li>
                    <li>Harga dapat berubah sesuai kondisi pasar</li>
                    <li>Minimum order untuk pengiriman gratis berlaku</li>
                    <li>Biaya pengiriman untuk order di bawah minimum</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Delivery */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Pengiriman dan Penerimaan</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Waktu Pengiriman</h3>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Senin - Sabtu:</strong> 08:00 - 17:00 WIB</li>
                      <li>• <strong>Minggu:</strong> 09:00 - 15:00 WIB</li>
                      <li>• <strong>Pengiriman Ekspres:</strong> Tersedia dengan biaya tambahan</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pemeriksaan Produk</h3>
                  <p className="text-gray-600 mb-2">Pelanggan wajib:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Memeriksa kondisi produk saat penerimaan</li>
                    <li>Melaporkan kerusakan atau ketidaksesuaian dalam 24 jam</li>
                    <li>Memberikan bukti foto untuk klaim pengembalian</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Biaya Pengiriman</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Gratis ongkir untuk pembelian minimum Rp 1.000.000</li>
                    <li>Biaya pengiriman disesuaikan dengan jarak</li>
                    <li>Biaya tambahan untuk pengiriman luar kota</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Quality and Returns */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kualitas dan Pengembalian</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Jaminan Kualitas</h3>
                  <p className="text-gray-600 mb-2">Perusahaan menjamin:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Produk segar dan berkualitas tinggi</li>
                    <li>Kemasan baik dan tidak rusak</li>
                    <li>Berat sesuai dengan yang tertera</li>
                    <li>Kadaluarsa produk yang masih panjang</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-gray-700 font-semibold mb-2">Syarat Pengembalian:</p>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Kerusakan dilaporkan maksimal 24 jam setelah penerimaan</li>
                          <li>• Produk masih dalam kondisi asli (belum dibuka)</li>
                          <li>• Dilengkapi dengan bukti pembayaran</li>
                          <li>• Pengembalian berlaku untuk produk cacat pabrik</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsibilities */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Hak dan Kewajiban</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Kewajiban Perusahaan</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Menyediakan produk berkualitas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Mengirimkan pesanan tepat waktu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Memberikan informasi produk yang akurat</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Menangani keluhan dengan profesional</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Kewajiban Pelanggan</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Memberikan informasi yang benar</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Melakukan pembayaran tepat waktu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Memeriksa produk saat diterima</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Menyimpan produk dengan benar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-gray-700 mb-3">Perusahaan tidak bertanggung jawab atas:</p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Keterlambatan pengiriman karena force majeure (bencana alam, dll)</li>
                      <li>• Kerusakan produk setelah penerimaan</li>
                      <li>• Alergi atau reaksi terhadap produk makanan</li>
                      <li>• Kerugian tidak langsung atau konsekuensial</li>
                      <li>• Kesalahan informasi dari pihak ketiga</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pemutusan Layanan</h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Perusahaan berhak menghentikan atau menangguhkan layanan kepada Pelanggan jika:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Pelanggan melanggar syarat dan ketentuan ini</li>
                <li>Pelanggan melakukan pembayaran yang terlambat secara berulang</li>
                <li>Pelanggan menggunakan layanan untuk tujuan ilegal</li>
                <li>Pelanggan menyebabkan kerugian pada Perusahaan</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-green-100 mb-6">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan kami, silakan hubungi kami:
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
                  <p>📧 info@faisaltanjung.com</p>
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
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';
import { MPN_COMPANY } from '../data/mpnData';
import { MPNLogoIcon } from './MPNLogo';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectLocation: '',
    projectType: 'Sandwich Panel & Lantai ESD (Turnkey)',
    areaEstimate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMsg('Mohon isi nama lengkap Anda.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Mohon isi nomor telepon / WhatsApp yang valid.');
      return;
    }

    setSubmitted(true);
  };

  const handleDispatchToWhatsApp = () => {
    const text = `*PERMINTAAN SURVEI & KONSULTASI MPN PROJECT*
----------------------------------------
*Nama Pengirim:* ${formData.name}
*Perusahaan:* ${formData.company || '-'}
*Nomor WhatsApp:* ${formData.phone}
*Email:* ${formData.email || '-'}
*Lokasi Pabrik/Proyek:* ${formData.projectLocation || 'Jabodetabek'}
*Kebutuhan:* ${formData.projectType}
*Estimasi Luas Area:* ${formData.areaEstimate ? formData.areaEstimate + ' m²' : '-'}
*Catatan Tambahan:*
${formData.notes || 'Mohon dijadwalkan survei dan penawaran teknis.'}
----------------------------------------`;

    window.open(`https://wa.me/${MPN_COMPANY.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak" className="py-20 bg-slate-900 text-white scroll-mt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Konsultasi Langsung & Survei Lokasi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Diskusikan Kebutuhan Cleanroom & Lantai ESD Anda Bersama Ahlinya
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Dapatkan estimasi akurat, rekomendasi material terbaik, dan jadwal survei gratis untuk wilayah Jabodetabek & Karawang.
          </p>
        </div>

        {/* 2-Column Split: Form (7 cols) & Office Contact Info (5 cols) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Lead Capture Form */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Permintaan Survei Berhasil Terkirim!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Terima kasih, <strong>{formData.name}</strong>. Tim teknis MPN Project akan segera menghubungi nomor <strong>{formData.phone}</strong> dalam waktu maksimal 2 jam kerja.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                  <button
                    type="button"
                    onClick={handleDispatchToWhatsApp}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Lanjutkan ke WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        projectLocation: '',
                        projectType: 'Sandwich Panel & Lantai ESD (Turnkey)',
                        areaEstimate: '',
                        notes: '',
                      });
                    }}
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {errorMsg && (
                  <div className="p-3 bg-red-950/80 border border-red-700 text-red-200 rounded-lg text-xs">
                    {errorMsg}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Contoh: Ir. Hendra Gunawan"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">
                      Nama Perusahaan / Pabrik
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Contoh: PT Farmasi Nusantara"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">
                      Nomor WhatsApp / HP Aktif *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="0812xxxxxxxx"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="engineering@perusahaan.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">
                      Lokasi Proyek / Kawasan Industri
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      placeholder="Contoh: MM2100 Cikarang / GIIC"
                      value={formData.projectLocation}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">
                      Estimasi Luas Area (m²)
                    </label>
                    <input
                      type="number"
                      name="areaEstimate"
                      placeholder="Contoh: 500"
                      value={formData.areaEstimate}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    Kebutuhan Proyek Utama
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Sandwich Panel & Lantai ESD (Turnkey)">Turnkey Paket Lengkap: Sandwich Panel & Lantai ESD</option>
                    <option value="Modular Sandwich Panel Cleanroom Saja">Modular Sandwich Panel Cleanroom & Plafon Saja</option>
                    <option value="Lantai Antistatik (ESD Epoxy / Vinyl) Saja">Lantai Antistatik (ESD Epoxy / Vinyl) Saja</option>
                    <option value="Cold Storage & Freezer Room Suhu Beku">Cold Storage & Freezer Room Suhu Beku (-20°C)</option>
                    <option value="Renovasi & Re-coating Lantai ESD Eksisting">Renovasi & Re-coating Lantai ESD Eksisting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    Spesifikasi Khusus / Catatan
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Contoh: Dibutuhkan sertifikat resistensi ESD untuk audit ISO dan pintu hermetic sliding interlocking..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40"
                  >
                    <Send className="w-4 h-4" />
                    <span>Ajukan Jadwal Survei Gratis & Konsultasi</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Layanan survei tanpa dipungut biaya untuk wilayah Jabodetabek & Karawang.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Contact Details & Office Location Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center p-1.5 shadow-sm">
                  <MPNLogoIcon className="w-full h-full text-white" inverted={true} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{MPN_COMPANY.name}</h3>
                  <p className="text-xs text-blue-400 font-semibold">{MPN_COMPANY.tagline}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Kantor Operasional & Workshop:</strong>
                    <p className="text-slate-300 leading-relaxed">{MPN_COMPANY.address}</p>
                    <a
                      href={MPN_COMPANY.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-blue-400 hover:underline font-semibold"
                    >
                      Buka di Google Maps →
                    </a>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Telepon & WhatsApp Konsultasi:</strong>
                    <a
                      href={MPN_COMPANY.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-mono font-bold text-sm block"
                    >
                      {MPN_COMPANY.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-slate-400">Respon cepat 24/7 untuk darurat proyek</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Email Penawaran Resmi:</strong>
                    <p className="text-slate-300 font-mono">{MPN_COMPANY.email}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Jam Operasional:</strong>
                    <p className="text-slate-300">{MPN_COMPANY.operationalHours}</p>
                  </div>
                </div>

              </div>

              {/* Quick WhatsApp Action Banner */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${MPN_COMPANY.phoneRaw}?text=${encodeURIComponent('Halo MPN Project, saya ingin konsultasi langsung dengan konsultan teknis Anda.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Langsung via WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Coverage Trust Box */}
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700 text-xs text-slate-300">
              <strong className="text-white block mb-1">Cakupan Wilayah Instalasi:</strong>
              <p className="leading-relaxed text-[11px] text-slate-400">
                Jakarta, Cikarang, Karawang, Bekasi, Tangerang, Bogor, Depok, Serang, Semarang, Surabaya, Batam, Medan, dan seluruh kawasan industri Indonesia.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

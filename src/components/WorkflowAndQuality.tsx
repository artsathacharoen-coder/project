import React, { useState } from 'react';
import { ClipboardCheck, Compass, Hammer, ShieldAlert, ChevronDown, CheckCircle, Quote } from 'lucide-react';
import { FAQ_DATA, TESTIMONIALS_DATA } from '../data/mpnData';

export const WorkflowAndQuality: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const workflowSteps = [
    {
      step: '01',
      title: 'Konsultasi Teknis & Survei Lokasi Gratis',
      desc: 'Tim insinyur MPN Project meninjau lokasi langsung di Jabodetabek & Karawang untuk mengukur dimensi, mengecek kelembaban beton (moisture test), dan menentukan kelas ISO cleanroom yang dibutuhkan.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Perencanaan Gambar CAD & RAB Transparan',
      desc: 'Penyusunan denah modular panel, detail coving sanitasi lengkung R-50, pemetaan jalur pita tembaga grounding ESD, serta jadwal pengerjaan tanpa biaya tersembunyi.',
      icon: ClipboardCheck,
    },
    {
      step: '03',
      title: 'Fabrikasi Presisi & Instalasi Knockdown Cepat',
      desc: 'Pemasangan panel sandwich interlock kedap udara dengan ketepatan milimeter dan aplikasi epoxy / vinyl ESD oleh teknisi bersertifikat. Konstruksi bersih tanpa polusi semen.',
      icon: Hammer,
    },
    {
      step: '04',
      title: 'Pengujian Megohmmeter & Sertifikasi Garansi',
      desc: 'Uji resistansi permukaan Point-to-Point dan Point-to-Ground dengan Megger terkalibrasi. Penerbitan Berita Acara, laporan hasil uji resmi untuk audit, dan sertifikat garansi hingga 3 tahun.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white text-slate-900 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Workflow Section */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Metodologi Kerja Standar Industri
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              4 Langkah Mudah Mewujudkan Cleanroom & Lantai ESD Sempurna
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Dari survei awal hingga serah terima sertifikat uji, MPN Project menjamin efisiensi waktu, kerapian sambungan, dan kesiapan audit cGMP BPOM Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-extrabold text-blue-600 font-mono tabular-nums">
                        {s.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Quality Assured</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Client Testimonials & Claim-to-Proof Adjacency */}
        <div className="mb-20 pt-10 border-t border-slate-200">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Validasi Klien Industri
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Kepercayaan Pemimpin Industri Farmasi, Elektronik & Logistik
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Quote className="w-6 h-6 text-blue-400" />
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {t.metric}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs font-bold text-slate-900">{t.author}</div>
                  <div className="text-[11px] text-slate-600 font-medium">{t.role}</div>
                  <div className="text-[11px] text-blue-600">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-slate-200">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Tanya Jawab Teknis
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Informasi lengkap seputar regulasi ISO cleanroom, standar resistance ESD, dan garansi MPN Project.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      <div className="pt-3">{faq.a}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

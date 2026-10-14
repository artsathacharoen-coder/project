import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles, Building2, PhoneCall } from 'lucide-react';
import { MPN_COMPANY } from '../data/mpnData';

export const Hero: React.FC = () => {
  const getWhatsAppLink = (message = 'Halo MPN Project, saya ingin konsultasi kebutuhan Cleanroom / Sandwich Panel / Lantai ESD untuk fasilitas kami.') => {
    return `https://wa.me/${MPN_COMPANY.phoneRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
      {/* Background Subtle Technical Grid & Radial Lighting */}
      <div className="absolute inset-0 bg-grid-slate opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Kicker - Zero-Pill discipline: unboxed clean text with typographic dot separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-6">
          <span>Spesialis Cleanroom cGMP</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Lantai Antistatik ESD</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Gratis Survei Jabodetabek</span>
        </div>

        {/* 2-Column Split: Content & Visual Blueprint Anchor */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-balance">
              Bangun Cleanroom & Pabrik <span className="text-blue-400">2x Lebih Cepat</span> & Anti Listrik Statis
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty">
              Solusi sistem Sandwich Panel PIR / Rockwool dan Lantai Antistatik (ESD) bersertifikasi internasional. 
              Presisi tinggi, tahan bakteri, bergaransi resmi, dan siap pakai dalam hitungan hari untuk industri farmasi, makanan, data center, dan manufaktur elektronik.
            </p>

            {/* Value bullets */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 pb-2 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Panel modular lidah-alur kedap udara</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Resistensi ESD 10⁴ – 10⁹ Ω teruji Megger</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standar cGMP BPOM & ISO 14644-1</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garansi resmi material & instalasi</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 whitespace-nowrap"
              >
                <span>Hitung Estimasi Proyek (RAB)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Konsultasi Teknis WhatsApp</span>
              </a>
            </div>

            {/* Location & Contact Notice */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Workshop & Kantor Operasional: Jl. Dr. Saharjo No.216, Tebet, Jakarta Selatan</span>
            </div>
          </div>

          {/* Column 2: Visual Architectural Blueprint / Cutaway Rendering */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 border border-slate-700/80 p-6 shadow-2xl overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/70 mb-4">
                <div>
                  <div className="text-xs font-mono text-blue-400 font-semibold tracking-wider">
                    SPEC_SYSTEM_OVERVIEW
                  </div>
                  <div className="text-sm font-bold text-white">
                    Integrated Cleanroom & ESD System
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800/50 rounded">
                    ISO 14644-1 COMPLIANT
                  </span>
                </div>
              </div>

              {/* Graphic Layered Architectural Cutaway */}
              <div className="relative space-y-3.5 my-2">
                
                {/* Layer 1: Plafon & Filter HEPA */}
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-900/50 text-blue-400 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Walkable Ceiling Panel 75mm</span>
                      <span className="text-[11px] font-mono text-slate-400">PIR B1 Core</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Plafon modular mampu menahan beban maintenance dan terintegrasi flush lighting troffer.
                    </p>
                  </div>
                </div>

                {/* Layer 2: Dinding Sandwich Panel Antibakteri */}
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-900/50 text-indigo-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Wall Partition PIR / Rockwool</span>
                      <span className="text-[11px] font-mono text-indigo-400">Tongue & Groove</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Pelat Colorcoat antibakteri anti-jamur dengan radius coving sanitasi R-50 di setiap sudut.
                    </p>
                  </div>
                </div>

                {/* Layer 3: Lantai ESD Antistatik & Grounding Grid */}
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-blue-500/40 shadow-inner flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-900/50 text-emerald-400 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-300">ESD Floor System (Conductive 2mm)</span>
                      <span className="text-[11px] font-mono text-emerald-400">10⁴ - 10⁶ Ω</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Dilengkapi copper foil grounding grid terhubung ke grounding pit bumi &lt; 1 Ohm.
                    </p>
                  </div>
                </div>

              </div>

              {/* Schematic mini status bar */}
              <div className="mt-5 pt-4 border-t border-slate-700/70 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                  <div className="font-mono text-blue-400 font-bold tabular-nums">2x Lebih Cepat</div>
                  <div className="text-[11px] text-slate-400">Waktu Pasang</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                  <div className="font-mono text-emerald-400 font-bold tabular-nums">0% Defect ESD</div>
                  <div className="text-[11px] text-slate-400">Perlindungan IC</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                  <div className="font-mono text-amber-400 font-bold tabular-nums">3 Tahun</div>
                  <div className="text-[11px] text-slate-400">Garansi Penuh</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Proof Strip below hero split - as required by Frontend Design rule 13 */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-blue-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">120+ Proyek Selesai</div>
              <div className="text-xs text-slate-400">Farmasi, Makanan & Elektronik</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Sertifikat Uji Megger</div>
              <div className="text-xs text-slate-400">Laporan Resmi Resistensi ESD</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Standar ISO 14644-1</div>
              <div className="text-xs text-slate-400">Cleanroom Kelas 5 s/d 8 cGMP</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Free Survey Jabodetabek</div>
              <div className="text-xs text-slate-400">Tanpa Biaya & Konsultasi Gratis</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

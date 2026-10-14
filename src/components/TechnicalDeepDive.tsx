import React, { useState } from 'react';
import { Layers, ShieldCheck, Zap, Thermometer, Flame, Activity, Check, ArrowRight } from 'lucide-react';
import { PANEL_COMPARISON_DATA, ESD_RESISTANCE_GRADES } from '../data/mpnData';

export const TechnicalDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'panel' | 'esd'>('panel');
  const [activeResistanceZone, setActiveResistanceZone] = useState<number>(0);

  return (
    <section id="spesifikasi" className="py-20 bg-white text-slate-900 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Standar Keteknikan & Material
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Spesifikasi Lengkap Panel Cleanroom & Lantai Antistatik
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Semua material MPN Project diproduksi sesuai regulasi cGMP BPOM, standar kebersihan udara ISO 14644-1, 
            dan sertifikasi electrostatic discharge ANSI/ESD S20.20 untuk proteksi maksimal fasilitas industri Anda.
          </p>
        </div>

        {/* Interactive Segmented Control (Functional tab control) */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-md mb-10 border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('panel')}
            className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === 'panel'
                ? 'bg-white text-blue-600 shadow-sm border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>01. Modular Sandwich Panel</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('esd')}
            className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === 'esd'
                ? 'bg-white text-blue-600 shadow-sm border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>02. Lantai Antistatik (ESD)</span>
          </button>
        </div>

        {/* Tab 1: Sandwich Panel Deep Dive */}
        {activeTab === 'panel' && (
          <div className="space-y-12">
            
            {/* Visual Schematic Diagram & Engineering Features */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Graphic Layered Cross-Section Diagram */}
              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl">
                <div className="text-xs font-mono text-blue-400 font-bold mb-4 flex items-center justify-between">
                  <span>ANATOMI_SANDWICH_PANEL</span>
                  <span className="text-[11px] text-slate-400 font-normal">Tebal 50–100mm</span>
                </div>

                <div className="space-y-3">
                  {/* Outer Steel */}
                  <div className="p-3 rounded-lg bg-slate-800 border-l-4 border-l-blue-500 border border-slate-700">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>1. Plat Baja Pre-painted Galvanized (PPGI)</span>
                      <span className="text-[11px] font-mono text-blue-400">0.45 – 0.6mm</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Lapisan cat antibakteri & anti-jamur, tahan bahan kimia pembersih cleanroom (alkohol, hidrogen peroksida).
                    </div>
                  </div>

                  {/* Core Insulation */}
                  <div className="p-3.5 rounded-lg bg-blue-950/70 border-l-4 border-l-emerald-500 border border-blue-900/50">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>2. Rigid Core Foam (PIR / PU / Rockwool)</span>
                      <span className="text-[11px] font-mono text-emerald-400">Densitas 40-45 kg/m³</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Insulasi termal super ketat (K-value 0.020 W/m.K). Tahan api kelas B1 (Self-Extinguishing).
                    </div>
                  </div>

                  {/* Joint Profile */}
                  <div className="p-3 rounded-lg bg-slate-800 border-l-4 border-l-amber-500 border border-slate-700">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>3. Interlocking Tongue & Groove Joint</span>
                      <span className="text-[11px] font-mono text-amber-400">Airtight Seal</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Sambungan lidah alur presisi tanpa celah, dilapisi sealant silikon food-grade untuk mempertahankan tekanan udara positif ruangan.
                    </div>
                  </div>

                  {/* Coving Accessory */}
                  <div className="p-3 rounded-lg bg-slate-800 border-l-4 border-l-purple-500 border border-slate-700">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>4. Profil Coving Aluminium Lengkung R-50</span>
                      <span className="text-[11px] font-mono text-purple-400">Sanitasi cGMP</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Menghilangkan sudut tajam 90° antara dinding-lantai dan dinding-plafon, mencegah penumpukan partikel debu.
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Sertifikasi: SNI & Standar cGMP BPOM</span>
                  <span className="text-emerald-400 font-bold">Lolos Uji Partikel</span>
                </div>
              </div>

              {/* Core Features Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Insulasi Termal Maksimal
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Menjaga temperatur ruang terkontrol dingin secara stabil dari -25°C hingga +22°C. Menghemat beban listrik kompresor chiller / HVAC hingga 30%.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-3">
                      <Flame className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Tahan Api B1 & Rockwool A1
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Material inti PIR memiliki sifat self-extinguishing (mati sendiri saat terbakar), sedangkan varian Rockwool bersertifikat Fire Rating hingga 120 menit.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Higienis & Bebas Sudut Mati
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Permukaan rata, mudah disterilkan dengan disinfektan kimia tanpa merusak plat. Lengkap dengan coving radius melengkung sesuai regulasi BPOM.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Modularity & Walkable Ceiling
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Instalasi knockdown cepat tanpa debu konstruksi semen. Plafon modular sanggup menopang teknisi maintenance ducting HVAC dan filter HEPA.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* Technical Comparison Table */}
            <div className="mt-12">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>Perbandingan Karakteristik Material Sandwich Panel</span>
              </h3>
              
              <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 text-slate-700 uppercase font-bold tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Tipe Material</th>
                      <th className="py-3 px-4">Densitas</th>
                      <th className="py-3 px-4">Konduktivitas Termal (λ)</th>
                      <th className="py-3 px-4">Fire Rating (Tahan Api)</th>
                      <th className="py-3 px-4">Aplikasi Utama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {PANEL_COMPARISON_DATA.map((item, idx) => (
                      <tr key={item.type} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                        <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                          <span className="text-blue-600">{item.type}</span> · {item.fullName}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-slate-700 tabular-nums">{item.density}</td>
                        <td className="py-3.5 px-4 font-mono text-slate-700 tabular-nums">{item.thermalConductivity}</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-800">{item.fireRating}</td>
                        <td className="py-3.5 px-4 text-slate-600">{item.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: ESD Flooring Deep Dive */}
        {activeTab === 'esd' && (
          <div id="lantai-esd" className="space-y-12">
            
            {/* Visual Schematic Diagram & Engineering Features */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* ESD Layer Cross-Section Schematic */}
              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl">
                <div className="text-xs font-mono text-blue-400 font-bold mb-4 flex items-center justify-between">
                  <span>STRUKTUR_LAPISAN_LANTAI_ESD</span>
                  <span className="text-[11px] text-emerald-400 font-normal">Ketebalan 2.0 – 3.0mm</span>
                </div>

                <div className="space-y-3">
                  {/* Layer 1: Top Coat */}
                  <div className="p-3 rounded-lg bg-emerald-950/80 border-l-4 border-l-emerald-400 border border-emerald-900/60">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-200">
                      <span>1. Top Coat ESD Self-Leveling</span>
                      <span className="text-[11px] font-mono text-emerald-400">Resistansi 10⁴ - 10⁶ Ω</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Lapisan finish mulus mengkilap dengan carbon micro-fibers penghantar arus statis, anti-abrasif, dan mudah dibersihkan.
                    </div>
                  </div>

                  {/* Layer 2: Conductive Undercoat */}
                  <div className="p-3 rounded-lg bg-slate-800 border-l-4 border-l-blue-400 border border-slate-700">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>2. Conductive Carbon Intermediate Primer</span>
                      <span className="text-[11px] font-mono text-blue-400">Resistansi Rendah</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Lapisan pengikat hitam karbon yang meratakan arus muatan statis dari permukaan lantai ke pita tembaga.
                    </div>
                  </div>

                  {/* Layer 3: Copper Grid */}
                  <div className="p-3 rounded-lg bg-amber-950/80 border-l-4 border-l-amber-400 border border-amber-900/60">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-200">
                      <span>3. Grid Pita Tembaga Murni (Copper Tape)</span>
                      <span className="text-[11px] font-mono text-amber-400">Mesh 3m x 3m</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Jaringan conductive grid tembaga yang menghubungkan seluruh permukaan ruangan ke titik pentanahan (Grounding Earthing Busbar &lt; 1 Ω).
                    </div>
                  </div>

                  {/* Layer 4: Concrete Substrate */}
                  <div className="p-3 rounded-lg bg-slate-800 border-l-4 border-l-slate-400 border border-slate-700">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>4. Substrat Beton & Moisture Barrier Primer</span>
                      <span className="text-[11px] font-mono text-slate-400">Shotblast K-300</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Beton dipersiapkan dengan shotblasting/grinding dan primer anti-lembap untuk mencegah delaminasi epoxy.
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Standar Pengujian: ANSI/ESD S20.20</span>
                  <span className="text-emerald-400 font-bold">Uji Megger Sertifikat</span>
                </div>
              </div>

              {/* ESD Benefits Grid */}
              <div className="lg:col-span-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Proteksi Kerusakan Komponen IC
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Lonjakan listrik statis sekecil 100 Volt dapat merusak microchip PCB secara permanen. Lantai ESD MPN membuang muatan tubuh pekerja dalam &lt; 0.05 detik.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Sertifikat Uji Megohmmeter Resmi
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Setiap pekerjaan kami uji langsung dengan alat ukur kalibrasi titik-ke-titik (Point to Point Rp-p) dan titik-ke-ground (Rg) untuk lampiran audit sertifikasi Anda.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-3">
                      <Flame className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Pencegahan Percikan Api (Anti-Spark)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Sangat krusial untuk pabrik dengan zat pelarut kimia, ruang perakitan baterai lithium EV, atau pergudangan bahan mudah terbakar.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Tahan Beban Mekanis Forklift
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Kekuatan tekan tinggi (&gt; 60 N/mm²) tahan lalu lintas hand pallet, troli komponen elektronik, dan forklift tanpa retak atau terkelupas.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* ESD Resistance Range Interactive Guide */}
            <div className="mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Klasifikasi Rentang Resistansi Permukaan Lantai ESD (Ohm / Ω)
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Klik kategori di bawah ini untuk melihat detail aplikasi dan karakteristik pembuangan listrik statis:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {ESD_RESISTANCE_GRADES.map((grade, index) => {
                  const isSelected = activeResistanceZone === index;
                  return (
                    <div
                      key={grade.category}
                      onClick={() => setActiveResistanceZone(index)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/20'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900 flex items-center justify-between mb-1">
                        <span>{grade.category}</span>
                        {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                      </div>

                      <div className="text-xs font-mono font-bold text-blue-600 tabular-nums mb-2">
                        {grade.resistanceRange}
                      </div>

                      <div className="text-[11px] text-slate-500 mb-3">
                        Decay Time: <strong className="text-slate-800">{grade.voltageDecay}</strong>
                      </div>

                      <div className="text-[11px] text-slate-700 font-medium mb-1">Cocok untuk:</div>
                      <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                        {grade.suitableEnvironments.map((env, i) => (
                          <li key={i}>{env}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

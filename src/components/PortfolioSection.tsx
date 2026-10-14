import React, { useState } from 'react';
import { Building2, MapPin, Calendar, CheckCircle2, ArrowRight, X, ShieldCheck, Ruler, MessageSquare } from 'lucide-react';
import { PROJECTS_DATA, ProjectCaseStudy, MPN_COMPANY } from '../data/mpnData';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'Cleanroom Farmasi', label: 'Cleanroom Farmasi' },
    { id: 'Lantai ESD', label: 'Lantai Antistatik ESD' },
    { id: 'Cold Storage', label: 'Cold Storage & Chiller' },
    { id: 'Data Center', label: 'Data Center' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.clientCategory === activeCategory);

  const handleWhatsAppInquiry = (project: ProjectCaseStudy) => {
    const text = `Halo MPN Project, saya tertarik dengan proyek "${project.title}" (${project.location}). Kami memiliki kebutuhan serupa dan ingin konsultasi spesifikasi & survei lokasi.`;
    window.open(`https://wa.me/${MPN_COMPANY.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portofolio" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Bukti Pengalaman Kerja Nyata
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Portofolio Proyek & Studi Kasus
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Menangani lebih dari 120+ instalasi ruang bersih cleanroom, partisi sandwich panel, dan lantai antistatik di kawasan industri Cikarang, Karawang, Jabodetabek, hingga seluruh Indonesia.
            </p>
          </div>

          {/* Interactive Category Filter Segmented Control */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-sm shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                
                {/* Clean unboxed metadata with typographic dot separator */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-blue-600">{project.clientCategory}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="font-mono tabular-nums">{project.year}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Location and metrics */}
                <div className="space-y-1.5 text-xs text-slate-600 mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Luas Area: <strong className="font-mono text-slate-900 tabular-nums">{project.area}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Durasi: <strong className="text-slate-900">{project.duration}</strong></span>
                  </div>
                </div>

                {/* Outcome Highlight */}
                <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-900 mb-4">
                  <div className="font-bold text-[11px] uppercase tracking-wider text-emerald-700 mb-0.5">Hasil Audit:</div>
                  <p className="line-clamp-2">{project.outcome}</p>
                </div>

                {/* Scope highlights */}
                <div className="space-y-1 text-xs text-slate-600">
                  {project.scope.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                  {project.scope.length > 2 && (
                    <div className="text-[11px] text-slate-400 italic pl-5">
                      +{project.scope.length - 2} lingkup pekerjaan lainnya...
                    </div>
                  )}
                </div>

              </div>

              {/* Card Footer Button */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Lihat Rincian Teknis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleWhatsAppInquiry(project)}
                  className="text-[11px] text-slate-500 hover:text-slate-900 font-semibold flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-500" />
                  <span>Tanya Proyek Ini</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200">
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  {selectedProject.clientCategory} · Tahun {selectedProject.year}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs">
              
              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-400 block text-[11px]">Lokasi</span>
                  <span className="font-semibold text-slate-800">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Luas Area</span>
                  <span className="font-mono font-bold text-slate-900 tabular-nums">{selectedProject.area}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Durasi Selesai</span>
                  <span className="font-semibold text-slate-800">{selectedProject.duration}</span>
                </div>
              </div>

              {/* Material Spec */}
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200/60">
                <strong className="text-blue-900 block mb-1">Spesifikasi Material Utama:</strong>
                <p className="text-slate-700">{selectedProject.material}</p>
              </div>

              {/* Full Scope */}
              <div>
                <strong className="text-slate-900 block mb-2">Lingkup Pekerjaan & Detail Instalasi:</strong>
                <ul className="space-y-2">
                  {selectedProject.scope.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result & Outcome */}
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950">
                <strong className="text-emerald-800 block mb-1">Hasil & Bukti Audit Lapangan:</strong>
                <p>{selectedProject.outcome}</p>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => handleWhatsAppInquiry(selectedProject)}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Proyek Serupa via WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="py-3 px-4 rounded-xl font-semibold text-xs text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

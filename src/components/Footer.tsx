import React from 'react';
import { MPN_COMPANY } from '../data/mpnData';
import { MPNLogoIcon } from './MPNLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center p-1 shadow-sm">
                <MPNLogoIcon className="w-full h-full text-white" inverted={true} />
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">
                MPN <span className="text-blue-500">PROJECT</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Spesialis Kontraktor & Supplier Modular Sandwich Panel Cleanroom cGMP, Cold Storage, dan Lantai Antistatik (ESD Epoxy & Vinyl) bersertifikasi internasional di Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Layanan Utama
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#spesifikasi" className="hover:text-white transition-colors">
                  Sandwich Panel PIR Cleanroom
                </a>
              </li>
              <li>
                <a href="#spesifikasi" className="hover:text-white transition-colors">
                  Sandwich Panel Rockwool Tahan Api
                </a>
              </li>
              <li>
                <a href="#lantai-esd" className="hover:text-white transition-colors">
                  Lantai Antistatik (ESD Epoxy)
                </a>
              </li>
              <li>
                <a href="#lantai-esd" className="hover:text-white transition-colors">
                  Lantai ESD Vinyl Dissipative
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">
                  Kalkulator RAB Proyek
                </a>
              </li>
            </ul>
          </div>

          {/* Standards & Certifications */}
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Standar Regulasi
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>ISO 14644-1 Cleanroom Classes 5-8</li>
              <li>Badan Pengawas Obat & Makanan (BPOM cGMP)</li>
              <li>ANSI/ESD S20.20 Standard Compliance</li>
              <li>IEC 61340-4-1 Surface Resistance</li>
              <li>HACCP & FSSC 22000 Food Safety</li>
            </ul>
          </div>

          {/* Office & Contact */}
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Kantor Pusat
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              {MPN_COMPANY.address}
            </p>
            <div className="pt-2 font-mono text-emerald-400 text-xs font-bold">
              WhatsApp: {MPN_COMPANY.phoneDisplay}
            </div>
            <div className="text-slate-500 text-[11px]">
              {MPN_COMPANY.operationalHours}
            </div>
          </div>

        </div>

        {/* Quiet copyright row */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {MPN_COMPANY.legalName}. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-4">
            <a href="#spesifikasi" className="hover:text-slate-400">Spesifikasi</a>
            <span>·</span>
            <a href="#kalkulator" className="hover:text-slate-400">Kalkulator RAB</a>
            <span>·</span>
            <a href="#kontak" className="hover:text-slate-400">Hubungi Kami</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

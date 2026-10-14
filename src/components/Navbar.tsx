import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { MPN_COMPANY } from '../data/mpnData';
import { MPNLogoIcon } from './MPNLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getWhatsAppLink = (message = 'Halo MPN Project, saya ingin konsultasi mengenai kebutuhan Sandwich Panel / Lantai Antistatik.') => {
    return `https://wa.me/${MPN_COMPANY.phoneRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center p-1 shadow-sm group-hover:bg-blue-600 transition-colors">
            <MPNLogoIcon className="w-full h-full text-white" inverted={true} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            MPN <span className="text-blue-600">PROJECT</span>
          </span>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#spesifikasi" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Spesifikasi Panel
          </a>
          <a href="#lantai-esd" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Lantai Antistatik
          </a>
          <a href="#kalkulator" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 text-blue-600 font-bold">
            Kalkulator RAB
          </a>
          <a href="#portofolio" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Portofolio
          </a>
          <a href="#faq" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Tanya Jawab
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasi WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <a
            href="#spesifikasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Spesifikasi Sandwich Panel
          </a>
          <a
            href="#lantai-esd"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Lantai Antistatik (ESD)
          </a>
          <a
            href="#kalkulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            Kalkulator Estimasi Proyek (RAB)
          </a>
          <a
            href="#portofolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Portofolio & Studi Kasus
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            FAQ & Standar Audit
          </a>
          <a
            href="#kontak"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Lokasi & Kontak
          </a>

          <div className="pt-2 border-t border-slate-100">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { MPN_COMPANY } from '../data/mpnData';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const getWhatsAppUrl = () => {
    const text = 'Halo MPN Project, saya ingin konsultasi kebutuhan Sandwich Panel / Lantai Antistatik (ESD).';
    return `https://wa.me/${MPN_COMPANY.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2">
      {/* Small informative prompt balloon */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-700 text-xs">
          <span>Konsultasi Teknis & Free Survey</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi MPN Project via WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-950/30 transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};

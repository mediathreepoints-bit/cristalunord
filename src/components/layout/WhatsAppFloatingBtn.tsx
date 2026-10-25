'use client';

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import WhatsAppChatModal from '@/components/whatsapp/WhatsAppChatModal';

export default function WhatsAppFloatingBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed right-5 bottom-6 z-40 flex items-center gap-3">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-5 py-3 rounded-full shadow-apple-lg hover:shadow-glow-red transition-all duration-300 hover:scale-105"
          aria-label="Discuter avec l'Assistant WhatsApp Cristalu Nord"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-25 pointer-events-none" />

          <div className="relative">
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-red rounded-full border-2 border-emerald-500" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-emerald-100 font-bold leading-none">
              Assistant IA &amp; Devis
            </span>
            <span className="text-xs font-bold leading-tight">
              WhatsApp Direct
            </span>
          </div>
        </button>
      </div>

      <WhatsAppChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

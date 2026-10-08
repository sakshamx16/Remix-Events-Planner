import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Remix Events Planner on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 bg-[#141312] text-[#FAF8F5] border border-[#C9A66B]/50 hover:border-[#C9A66B] rounded-sm shadow-lg transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A66B]"
    >
      <span className="w-2 h-2 rounded-full bg-[#25D366]" aria-hidden="true" />
      <MessageCircle className="w-4 h-4 text-[#C9A66B] shrink-0" />
      <span className="text-xs font-medium tracking-wider whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  );
};

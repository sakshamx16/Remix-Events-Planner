import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121110] text-[#FAF8F5] pt-16 pb-24 sm:pb-28 border-t border-[#FAF8F5]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF8F5]/10 items-start">
          {/* Brand Column */}
          <div className="md:col-span-7 space-y-4">
            <a
              href="#home"
              className="font-serif-display text-2xl sm:text-3xl font-semibold tracking-[0.1em] text-[#FAF8F5] inline-block"
            >
              {SITE_CONFIG.brandDisplay}
            </a>

            {/* Unboxed Service List with Typographic Separators */}
            <p className="text-xs sm:text-sm text-[#FAF8F5]/75 leading-relaxed max-w-2xl">
              Wedding Planning <span className="text-[#C9A66B] mx-1">•</span> Event Planning{' '}
              <span className="text-[#C9A66B] mx-1">•</span> Premium Wedding Decor{' '}
              <span className="text-[#C9A66B] mx-1">•</span> Catering{' '}
              <span className="text-[#C9A66B] mx-1">•</span> Entertainment
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#FAF8F5]/65 pt-1">
              <MapPin className="w-4 h-4 text-[#C9A66B] shrink-0" />
              <span>{SITE_CONFIG.address.full}</span>
            </div>
          </div>

          {/* Navigation & Social Column */}
          <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end gap-8 sm:gap-12">
            <div>
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#C9A66B] mb-3">
                Navigation
              </p>
              <ul className="space-y-2 text-sm text-[#FAF8F5]/75">
                <li>
                  <a href="#home" className="hover:text-[#FAF8F5] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#FAF8F5] transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#FAF8F5] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#C9A66B] mb-3">
                Connect
              </p>
              <div className="flex flex-col space-y-2.5 text-sm text-[#FAF8F5]/75">
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target={SITE_CONFIG.contact.instagramUrl.startsWith('http') ? '_blank' : undefined}
                  rel={SITE_CONFIG.contact.instagramUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 hover:text-[#C9A66B] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C9A66B]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#C9A66B] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A66B]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/55">
          <p>© 2026 Remix Events Planner. All rights reserved.</p>
          <p>Patna, Bihar</p>
        </div>
      </div>
    </footer>
  );
};

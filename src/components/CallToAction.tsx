import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#121110] text-[#FAF8F5] overflow-hidden border-b border-[#FAF8F5]/10">
      {/* Subtle Background Image with Heavy Dark Charcoal Scrim */}
      <div className="absolute inset-0 z-0 opacity-25">
        <ResilientImage
          src="/src/assets/images/gallery_reception_venue_1791488877616.jpg"
          alt="Evening wedding reception backdrop"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#121110]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-8 h-[1px] bg-[#C9A66B]" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.2em] text-[#E6D2B5] uppercase">
            Bespoke Consultations • Patna, Bihar
          </span>
          <span className="w-8 h-[1px] bg-[#C9A66B]" aria-hidden="true" />
        </div>

        <h2
          className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF8F5] leading-[1.1] mb-6"
          style={{ textWrap: 'balance' }}
        >
          Let&apos;s Create Something Beautiful
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/80 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Planning a wedding or special celebration? Tell us what you&apos;re imagining and let&apos;s bring it to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-sm font-medium tracking-wider text-[#121110] bg-[#C9A66B] hover:bg-[#d8b77e] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A66B]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Start Planning</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

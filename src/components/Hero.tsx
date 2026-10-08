import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-end lg:items-center bg-[#121110] overflow-hidden pt-24 pb-16 lg:py-28"
    >
      {/* Full-Bleed Architectural Wedding Photography */}
      <div className="absolute inset-0 z-0">
        <ResilientImage
          src={SITE_CONFIG.heroImage}
          alt="Luxury Indian wedding mandap and floral courtyard setup by Remix Events Planner in Patna"
          priority={true}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-1000"
        />
        {/* Measured contrast scrims ensuring >4.5:1 legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/65 to-[#121110]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/85 via-[#121110]/45 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Small Trust / Location Line — Unboxed editorial text */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-[#C9A66B]" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-medium tracking-[0.18em] text-[#E6D2B5] uppercase">
              Wedding &amp; Event Planners • Patna, Bihar
            </p>
          </div>

          {/* Primary Headline */}
          <h1
            className="font-serif-display text-4xl sm:text-6xl lg:text-[4.25rem] font-normal text-[#FAF8F5] leading-[1.08] tracking-[-0.01em] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Creating Celebrations You&apos;ll Remember Forever
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/85 font-normal leading-relaxed max-w-2xl mb-10">
            Luxury wedding planning, bespoke décor and unforgettable celebrations in Patna and beyond.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium tracking-wider text-[#121110] bg-[#C9A66B] hover:bg-[#d8b77e] rounded-sm transition-all duration-150 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A66B]"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider text-[#FAF8F5] border border-[#FAF8F5]/35 hover:border-[#C9A66B] hover:text-[#C9A66B] bg-[#121110]/40 rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A66B]"
            >
              View Our Work
            </a>
          </div>

          {/* Editorial Service Scope Bar — Quiet unboxed text with separators */}
          <div className="mt-14 pt-8 border-t border-[#FAF8F5]/15 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-[#FAF8F5]/75">
            <span>Bespoke Wedding Design</span>
            <span className="text-[#C9A66B]" aria-hidden="true">·</span>
            <span>End-to-End Coordination</span>
            <span className="text-[#C9A66B]" aria-hidden="true">·</span>
            <span>Floral &amp; Stage Architecture</span>
            <span className="text-[#C9A66B]" aria-hidden="true">·</span>
            <span>Catering &amp; Entertainment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

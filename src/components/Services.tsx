import React from 'react';
import {
  HeartHandshake,
  CalendarCheck,
  Palette,
  Flower2,
  UtensilsCrossed,
  Music,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

const ServiceIcon: React.FC<{ name: ServiceItem['iconName'] }> = ({ name }) => {
  const iconProps = { className: 'w-5 h-5 text-[#9E7B3B]', strokeWidth: 1.5 };
  switch (name) {
    case 'rings':
      return <HeartHandshake {...iconProps} />;
    case 'calendar':
      return <CalendarCheck {...iconProps} />;
    case 'palette':
      return <Palette {...iconProps} />;
    case 'floral':
      return <Flower2 {...iconProps} />;
    case 'catering':
      return <UtensilsCrossed {...iconProps} />;
    case 'music':
      return <Music {...iconProps} />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleServiceEnquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#F3EFE6] text-[#141312] border-b border-[#141312]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#9E7B3B]" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.16em] text-[#9E7B3B] uppercase">
                Our Expertise &amp; Capabilities
              </span>
            </div>
            <h2
              className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141312] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Curated Services for Extraordinary Celebrations
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#57534E] max-w-md leading-relaxed">
            From comprehensive wedding planning and coordination to custom floral architecture, catering, and live entertainment.
          </p>
        </div>

        {/* 6 Service Cards Grid — Single-level card elevation with hairline borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              className="group bg-[#FAF8F5] border border-[#141312]/10 rounded-sm overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Subtle Editorial Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1D1B18]">
                  <ResilientImage
                    src={service.image}
                    alt={`${service.title} by Remix Events Planner in Patna`}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 font-serif-display text-sm italic text-[#FAF8F5]/90 tabular-nums">
                    {service.index} · {service.subtitle}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-serif-display text-2xl font-semibold text-[#141312] group-hover:text-[#9E7B3B] transition-colors duration-150">
                      {service.title}
                    </h3>
                    <div className="shrink-0">
                      <ServiceIcon name={service.iconName} />
                    </div>
                  </div>

                  <p className="text-sm sm:text-[15px] text-[#4A4640] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Unboxed Metadata Highlights with Typographic Separators */}
                  <div className="pt-4 border-t border-[#141312]/10 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#57534E]">
                    {service.highlights.map((item, idx) => (
                      <React.Fragment key={item}>
                        <span>{item}</span>
                        {idx < service.highlights.length - 1 && (
                          <span className="text-[#9E7B3B]" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Card Footer Action */}
              <div className="px-6 sm:px-8 pb-6">
                <button
                  type="button"
                  onClick={() => handleServiceEnquire(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#141312] group-hover:text-[#9E7B3B] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#9E7B3B]"
                >
                  <span>Enquire About {service.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

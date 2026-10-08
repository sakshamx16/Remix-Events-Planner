import React from 'react';
import { ResilientImage } from './ResilientImage';

const PILLARS = [
  {
    index: '01',
    title: 'Concept & Bespoke Design',
    detail:
      "Customised concepts, themes, and spatial designs shaped around your vision for the celebration.",
  },
  {
    index: '02',
    title: 'Décor & Venue Ambience',
    detail:
      'Elegant floral arrangements, entrance décor, stage design, seating, and complete venue styling.',
  },
  {
    index: '03',
    title: 'Catering & Presentation',
    detail:
      'Beautifully presented food and catering arrangements planned thoughtfully for your guests.',
  },
  {
    index: '04',
    title: 'Coordination & Entertainment',
    detail:
      'End-to-end event coordination and entertainment planning to keep guests engaged throughout the celebration.',
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#FAF8F5] text-[#141312] border-b border-[#141312]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#9E7B3B]" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.16em] text-[#9E7B3B] uppercase">
                About Remix Events Planner
              </span>
            </div>

            <h2
              className="font-serif-display text-3xl sm:text-5xl lg:text-[3.25rem] font-normal text-[#141312] leading-[1.12] mb-8"
              style={{ textWrap: 'balance' }}
            >
              Turning Your Vision Into an Unforgettable Celebration
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#4A4640] leading-[1.7] max-w-[68ch]">
              <p>
                Located in Badi Khagaul, Patna, Bihar, <strong className="font-medium text-[#141312]">Remix Events Planner</strong> provides comprehensive wedding and event planning services—managing celebrations from initial concept and design through to final execution.
              </p>
              <p>
                With dedicated attention to bespoke wedding décor, venue ambience, catering presentation, and guest entertainment, we bring every element of your celebration together seamlessly so you and your guests can enjoy a truly memorable experience.
              </p>
            </div>

            {/* 4 Pillars Grid separated by clean hairline borders */}
            <div className="mt-12 pt-10 border-t border-[#141312]/10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {PILLARS.map((pillar) => (
                <div key={pillar.index} className="group">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-serif-display text-sm italic text-[#9E7B3B] tabular-nums">
                      {pillar.index}.
                    </span>
                    <h3 className="font-serif-display text-xl font-semibold text-[#141312]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#F3EFE6] p-4 sm:p-6 border border-[#141312]/10 rounded-sm">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <ResilientImage
                  src="/src/assets/images/gallery_floral_entrance_1791488829471.jpg"
                  alt="Grand floral entrance archway with ivory roses and brass lanterns by Remix Events Planner"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-[#57534E] pt-3 border-t border-[#141312]/10">
                <span className="font-serif-display italic text-sm text-[#141312]">
                  Bespoke Floral &amp; Architectural Styling
                </span>
                <span>Badi Khagaul · Patna, Bihar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

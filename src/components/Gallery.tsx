import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, getWhatsAppUrl } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

const FILTER_CATEGORIES = [
  'All Celebrations',
  'Mandap & Stage',
  'Floral & Entrance',
  'Mehndi & Haldi',
  'Table & Catering',
  'Reception & Venue',
] as const;

type FilterCategory = (typeof FILTER_CATEGORIES)[number];

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All Celebrations');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === 'All Celebrations'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Close lightbox on Escape or navigate with Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedItemIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredItems.length]);

  const activeLightboxItem: GalleryItem | null =
    selectedItemIndex !== null && filteredItems[selectedItemIndex]
      ? filteredItems[selectedItemIndex]
      : null;

  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 bg-[#FAF8F5] text-[#141312] border-b border-[#141312]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#9E7B3B]" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.16em] text-[#9E7B3B] uppercase">
                Featured Work &amp; Scenography
              </span>
            </div>
            <h2
              className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141312] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Signature Décor &amp; Celebration Portfolio
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#57534E] max-w-md leading-relaxed">
            Explore our bespoke floral entrances, mandap architecture, sunlit Haldi courtyards, and candlelit reception setups.
          </p>
        </div>

        {/* Interactive Filter Controls — Segmented Tabs */}
        <div
          role="tablist"
          aria-label="Filter portfolio by décor category"
          className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-12 border-b border-[#141312]/10"
        >
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => {
                  setActiveFilter(category);
                  setSelectedItemIndex(null);
                }}
                className={`px-4 py-2 text-xs font-medium tracking-wider transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#9E7B3B] ${
                  isActive
                    ? 'bg-[#141312] text-[#FAF8F5]'
                    : 'text-[#57534E] hover:text-[#141312] hover:bg-[#F3EFE6]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {filteredItems.map((item, idx) => {
            // If filtered to a single category, make items balanced 6-columns each
            const spanClass =
              activeFilter === 'All Celebrations' ? item.gridSpanClass : 'md:col-span-6';

            return (
              <figure
                key={item.id}
                className={`group cursor-pointer ${spanClass}`}
                onClick={() => setSelectedItemIndex(idx)}
              >
                <div className="relative overflow-hidden bg-[#1D1B18] rounded-sm border border-[#141312]/10">
                  <div className={`${item.aspectClass} w-full overflow-hidden`}>
                    <ResilientImage
                      src={item.image}
                      alt={`${item.title} — ${item.category} in ${item.location}`}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-[#121110]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-6">
                    <div className="text-[#FAF8F5]">
                      <p className="text-xs tracking-wider text-[#C9A66B] mb-1">
                        {item.category} · {item.location}
                      </p>
                      <p className="font-serif-display text-xl text-[#FAF8F5]">
                        Click to view full details
                      </p>
                    </div>
                    <span className="w-9 h-9 rounded-sm bg-[#FAF8F5]/15 text-[#FAF8F5] flex items-center justify-center">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Editorial Caption Below Image — Unboxed Metadata */}
                <figcaption className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#141312]/10">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#78716C] mb-1">
                      <span className="font-serif-display italic text-[#9E7B3B] tabular-nums">
                        0{idx + 1}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-serif-display text-2xl font-medium text-[#141312] group-hover:text-[#9E7B3B] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-[#9E7B3B] whitespace-nowrap shrink-0">
                    Inspect Setup →
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Editorial Lightbox Modal */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
          className="fixed inset-0 z-50 bg-[#121110]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedItemIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#1A1816] border border-[#FAF8F5]/15 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#FAF8F5]/10">
              <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/70">
                <span className="text-[#C9A66B]">{activeLightboxItem.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeLightboxItem.location}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItemIndex(null)}
                aria-label="Close gallery viewer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#FAF8F5]/80 hover:text-[#FAF8F5] bg-[#FAF8F5]/10 rounded-sm transition-colors"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image & Details Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 bg-[#0E0D0C] flex items-center justify-center max-h-[65vh] overflow-hidden">
                <ResilientImage
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full max-h-[65vh] object-contain"
                />
              </div>

              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between text-[#FAF8F5]">
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-[#C9A66B] block mb-2">
                    Remix Events Planner Showcase
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#FAF8F5] mb-4">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-sm text-[#FAF8F5]/75 leading-relaxed mb-6">
                    {activeLightboxItem.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#FAF8F5]/10">
                  <a
                    href={getWhatsAppUrl(
                      `Hi Remix Events Planner, I loved the "${activeLightboxItem.title}" (${activeLightboxItem.category}) setup in your gallery and would like to enquire about similar décor for our event.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium tracking-wider uppercase text-[#121110] bg-[#C9A66B] hover:bg-[#d8b77e] rounded-sm transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire About This Look</span>
                  </a>

                  {filteredItems.length > 1 && (
                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedItemIndex(
                            (selectedItemIndex! - 1 + filteredItems.length) %
                              filteredItems.length
                          )
                        }
                        className="inline-flex items-center gap-1 text-xs text-[#FAF8F5]/75 hover:text-[#C9A66B] transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous</span>
                      </button>
                      <span className="text-xs text-[#FAF8F5]/50 tabular-nums">
                        {selectedItemIndex! + 1} / {filteredItems.length}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedItemIndex(
                            (selectedItemIndex! + 1) % filteredItems.length
                          )
                        }
                        className="inline-flex items-center gap-1 text-xs text-[#FAF8F5]/75 hover:text-[#C9A66B] transition-colors"
                      >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

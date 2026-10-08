import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#121110]/95 backdrop-blur-md border-b border-[#FAF8F5]/10'
          : 'bg-gradient-to-b from-[#121110]/85 to-transparent border-b border-[#FAF8F5]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="font-serif-display text-xl sm:text-2xl font-semibold tracking-[0.12em] text-[#FAF8F5] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A66B]"
        >
          {SITE_CONFIG.businessName}
        </a>

        {/* Zone 2: 5 clean text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#FAF8F5]/85"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#FAF8F5] transition-colors duration-150 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#C9A66B] after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-wider text-[#121110] bg-[#C9A66B] hover:bg-[#d8b77e] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A66B]"
          >
            Plan Your Event
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#FAF8F5] hover:text-[#C9A66B] transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-[#C9A66B]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121110] border-b border-[#FAF8F5]/15 px-6 pt-4 pb-8">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="font-serif-display text-2xl text-[#FAF8F5]/90 hover:text-[#C9A66B] py-1.5 border-b border-[#FAF8F5]/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#121110] bg-[#C9A66B] hover:bg-[#d8b77e] rounded-sm transition-colors whitespace-nowrap"
              >
                Plan Your Event
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

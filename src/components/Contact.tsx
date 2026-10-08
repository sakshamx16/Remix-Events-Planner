import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  CheckCircle2,
  ArrowUpRight,
  Send,
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

interface ContactProps {
  preselectedEventType?: string;
}

const EVENT_TYPE_OPTIONS = [
  'Wedding Planning',
  'Event Planning',
  'Bespoke Wedding Design',
  'Wedding Planning & Coordination',
  'Premium Wedding Decor',
  'Catering',
  'Entertainment',
];

export const Contact: React.FC<ContactProps> = ({ preselectedEventType }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding Planning',
    eventDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedEventType) {
      setFormData((prev) => ({
        ...prev,
        eventType: preselectedEventType,
      }));
    }
  }, [preselectedEventType]);

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    const digitsOnly = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim() || digitsOnly.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const buildPersonalizedWhatsAppUrl = () => {
    const lines = [
      `Hi Remix Events Planner, I'd like to enquire about planning an event.`,
      ``,
      `• Name: ${formData.name}`,
      `• Phone: ${formData.phone}`,
      `• Event Type: ${formData.eventType}`,
      formData.eventDate ? `• Preferred Date: ${formData.eventDate}` : null,
      formData.message ? `• Vision / Notes: ${formData.message}` : null,
    ].filter(Boolean);

    return getWhatsAppUrl(lines.join('\n'));
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#FAF8F5] text-[#141312] border-b border-[#141312]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Location */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#9E7B3B]" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.16em] text-[#9E7B3B] uppercase">
                Begin the Conversation
              </span>
            </div>

            <h2
              className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141312] leading-[1.12] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Let&apos;s Plan Your Celebration Together
            </h2>

            <p className="text-base text-[#4A4640] leading-relaxed mb-10">
              Whether you have a confirmed wedding date or are exploring ideas for an upcoming family celebration in Patna, we invite you to connect with our planning studio.
            </p>

            {/* Studio Address & Contact Block */}
            <div className="bg-[#F3EFE6] border border-[#141312]/10 rounded-sm p-6 sm:p-8 space-y-6 mb-8">
              <div>
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#9E7B3B] mb-1">
                  Studio Location
                </p>
                <h3 className="font-serif-display text-2xl font-semibold text-[#141312]">
                  {SITE_CONFIG.businessName}
                </h3>
                <div className="mt-2 flex items-start gap-2.5 text-sm text-[#4A4640]">
                  <MapPin className="w-4 h-4 text-[#9E7B3B] shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.address.full}</span>
                </div>
              </div>

              <div className="pt-5 border-t border-[#141312]/10">
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#9E7B3B] mb-2">
                  Phone / Contact (Editable Placeholder)
                </p>
                {SITE_CONFIG.contact.phoneHref !== '#contact' ? (
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="inline-flex items-center gap-2.5 text-base sm:text-lg font-medium text-[#141312] hover:text-[#9E7B3B] transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#9E7B3B]" />
                    <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#141312] bg-[#FAF8F5] px-3.5 py-2 border border-dashed border-[#9E7B3B]/60 rounded-sm">
                    <Phone className="w-4 h-4 text-[#9E7B3B] shrink-0" />
                    <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                  </div>
                )}
                <p className="text-xs text-[#78716C] mt-2">
                  Update phone number, WhatsApp number, and Instagram link in{' '}
                  <code className="text-[#141312]">src/config/siteConfig.ts</code>
                </p>
              </div>

              {/* Direct Action Buttons: WhatsApp & Instagram */}
              <div className="pt-5 border-t border-[#141312]/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-medium tracking-wider uppercase text-[#FAF8F5] bg-[#141312] hover:bg-[#292724] rounded-sm transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A66B]" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target={SITE_CONFIG.contact.instagramUrl.startsWith('http') ? '_blank' : undefined}
                  rel={SITE_CONFIG.contact.instagramUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-medium tracking-wider uppercase text-[#141312] border border-[#141312]/20 hover:border-[#9E7B3B] hover:text-[#9E7B3B] bg-[#FAF8F5] rounded-sm transition-colors whitespace-nowrap"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] border border-[#141312]/15 rounded-sm p-6 sm:p-10">
              {isSubmitted ? (
                <div className="py-8 text-center max-w-lg mx-auto">
                  <div className="w-12 h-12 rounded-full bg-[#9E7B3B]/15 text-[#9E7B3B] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-display text-3xl text-[#141312] mb-3">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A4640] leading-relaxed mb-6">
                    Your event enquiry for <strong className="font-medium text-[#141312]">{formData.eventType}</strong> has been recorded. Our planning team in Patna will review your details and reach out to you on <span className="tabular-nums font-medium text-[#141312]">{formData.phone}</span>.
                  </p>

                  <div className="p-5 bg-[#F3EFE6] border border-[#141312]/10 rounded-sm mb-6 text-left text-xs text-[#4A4640] space-y-1.5">
                    <p className="font-medium text-[#141312] uppercase tracking-wider mb-2">
                      Enquiry Summary
                    </p>
                    <p>
                      <span className="text-[#78716C]">Event Type:</span> {formData.eventType}
                    </p>
                    {formData.eventDate && (
                      <p className="tabular-nums">
                        <span className="text-[#78716C]">Event Date:</span> {formData.eventDate}
                      </p>
                    )}
                    {formData.message && (
                      <p>
                        <span className="text-[#78716C]">Message:</span> {formData.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildPersonalizedWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#121110] bg-[#C9A66B] hover:bg-[#d8b77e] rounded-sm transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Directly via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          eventType: 'Wedding Planning & Coordination',
                          eventDate: '',
                          message: '',
                        });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#57534E] hover:text-[#141312] border border-[#141312]/15 rounded-sm transition-colors whitespace-nowrap"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-[#141312]/10 pb-5">
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#141312]">
                      Request an Event Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] mt-1">
                      Share your celebration details below and we will get back to you promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium tracking-wider uppercase text-[#141312] mb-2"
                      >
                        Your Name <span className="text-[#9E7B3B]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#141312]/20 rounded-sm text-[#141312] placeholder:text-[#78716C]/60 focus:outline-none focus:border-[#9E7B3B] transition-colors"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-medium tracking-wider uppercase text-[#141312] mb-2"
                      >
                        Mobile / Phone Number <span className="text-[#9E7B3B]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="Enter your 10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#141312]/20 rounded-sm text-[#141312] placeholder:text-[#78716C]/60 focus:outline-none focus:border-[#9E7B3B] transition-colors tabular-nums"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Event Type */}
                    <div>
                      <label
                        htmlFor="contact-event-type"
                        className="block text-xs font-medium tracking-wider uppercase text-[#141312] mb-2"
                      >
                        Event Type
                      </label>
                      <select
                        id="contact-event-type"
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({ ...formData, eventType: e.target.value })
                        }
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#141312]/20 rounded-sm text-[#141312] focus:outline-none focus:border-[#9E7B3B] transition-colors"
                      >
                        {EVENT_TYPE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label
                        htmlFor="contact-event-date"
                        className="block text-xs font-medium tracking-wider uppercase text-[#141312] mb-2"
                      >
                        Tentative Event Date
                      </label>
                      <input
                        id="contact-event-date"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDate: e.target.value })
                        }
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#141312]/20 rounded-sm text-[#141312] focus:outline-none focus:border-[#9E7B3B] transition-colors tabular-nums"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium tracking-wider uppercase text-[#141312] mb-2"
                    >
                      Tell Us About Your Celebration
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Share your venue preferences in Patna, approximate guest count, décor themes, or any specific services you require..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#141312]/20 rounded-sm text-[#141312] placeholder:text-[#78716C]/60 focus:outline-none focus:border-[#9E7B3B] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-medium tracking-wider uppercase text-[#121110] bg-[#C9A66B] hover:bg-[#d8b77e] rounded-sm transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E7B3B]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

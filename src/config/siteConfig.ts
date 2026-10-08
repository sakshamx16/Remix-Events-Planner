/**
 * Central configuration for Remix Events Planner.
 * Edit phone numbers, WhatsApp settings, Instagram links, and gallery images here.
 */

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  iconName: 'rings' | 'calendar' | 'palette' | 'floral' | 'catering' | 'music';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Floral & Entrance' | 'Mandap & Stage' | 'Table & Catering' | 'Mehndi & Haldi' | 'Reception & Venue';
  location: string;
  description: string;
  image: string;
  aspectClass: string;
  gridSpanClass: string;
}

export const SITE_CONFIG = {
  businessName: 'REMIX EVENTS PLANNER',
  brandDisplay: 'Remix Events Planner',
  tagline: 'Wedding & Event Planners • Patna, Bihar',
  address: {
    street: 'Badi Khagaul',
    city: 'Patna',
    state: 'Bihar',
    country: 'India',
    full: 'Badi Khagaul, Patna, Bihar, India',
  },
  // EDITABLE PLACEHOLDERS: Replace with real contact details before going live
  contact: {
    // Replace with the 10-digit WhatsApp number with country code (e.g., '91XXXXXXXXXX')
    whatsappNumber: '',
    // Display phone placeholder shown in the Contact section
    phoneDisplay: '[Phone Number — Update in siteConfig.ts]',
    phoneHref: '#contact',
    // Replace with the official Instagram profile URL
    instagramUrl: '#contact',
    instagramHandle: '[Instagram Profile — Update in siteConfig.ts]',
  },
  whatsappDefaultMessage:
    "Hi Remix Events Planner, I'm interested in planning an event. I'd like to know more about your services.",
  heroImage: '/src/assets/images/hero_luxury_indian_wedding_1791488813479.jpg',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.whatsappDefaultMessage;
  const cleanNumber = SITE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
  if (!cleanNumber) {
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wedding-planning',
    index: '01',
    title: 'Wedding Planning',
    subtitle: 'Wedding Planning & Coordination',
    description:
      'Complete planning and coordination for memorable weddings.',
    highlights: ['Wedding Planning', 'Wedding Planning & Coordination'],
    image: '/src/assets/images/hero_luxury_indian_wedding_1791488813479.jpg',
    iconName: 'rings',
  },
  {
    id: 'event-planning',
    index: '02',
    title: 'Event Planning',
    subtitle: 'Private & Social Events',
    description:
      'Thoughtful planning and execution for private and social events.',
    highlights: ['Private Events', 'Social Celebrations'],
    image: '/src/assets/images/gallery_reception_venue_1791488877616.jpg',
    iconName: 'calendar',
  },
  {
    id: 'bespoke-wedding-design',
    index: '03',
    title: 'Bespoke Wedding Design',
    subtitle: 'Customized Concepts & Themes',
    description:
      "Customized concepts, themes and décor designed around the couple's vision.",
    highlights: ['Custom Concepts', 'Themes & Décor'],
    image: '/src/assets/images/gallery_mehndi_haldi_decor_1791488866434.jpg',
    iconName: 'palette',
  },
  {
    id: 'premium-wedding-decor',
    index: '04',
    title: 'Premium Wedding Decor',
    subtitle: 'Floral, Stage & Venue Styling',
    description:
      'Elegant floral arrangements, entrance décor, stage design, seating and venue styling.',
    highlights: ['Floral Arrangements', 'Entrance & Stage Design', 'Venue Styling'],
    image: '/src/assets/images/gallery_floral_entrance_1791488829471.jpg',
    iconName: 'floral',
  },
  {
    id: 'catering',
    index: '05',
    title: 'Catering',
    subtitle: 'Food & Catering Arrangements',
    description:
      'Beautifully presented food and catering arrangements for celebrations.',
    highlights: ['Food Presentation', 'Catering Arrangements'],
    image: '/src/assets/images/gallery_table_catering_1791488854005.jpg',
    iconName: 'catering',
  },
  {
    id: 'entertainment',
    index: '06',
    title: 'Entertainment',
    subtitle: 'Celebration Entertainment',
    description:
      'Entertainment planning to keep guests engaged and the celebration memorable.',
    highlights: ['Guest Engagement', 'Entertainment Planning'],
    image: '/src/assets/images/gallery_reception_venue_1791488877616.jpg',
    iconName: 'music',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'royal-mandap-twilight',
    title: 'Mandap & Stage Decoration',
    category: 'Mandap & Stage',
    location: 'Patna, Bihar',
    description:
      'Bespoke stage design, floral arrangements, and ambient lighting for wedding ceremonies.',
    image: '/src/assets/images/hero_luxury_indian_wedding_1791488813479.jpg',
    aspectClass: 'aspect-[16/10]',
    gridSpanClass: 'md:col-span-7',
  },
  {
    id: 'jasmine-archway-entrance',
    title: 'Floral Wedding Entrance',
    category: 'Floral & Entrance',
    location: 'Patna, Bihar',
    description:
      'Elegant floral entrance archway and walkway styling to welcome guests.',
    image: '/src/assets/images/gallery_floral_entrance_1791488829471.jpg',
    aspectClass: 'aspect-[3/4]',
    gridSpanClass: 'md:col-span-5',
  },
  {
    id: 'marigold-haldi-courtyard',
    title: 'Mehndi & Haldi Décor',
    category: 'Mehndi & Haldi',
    location: 'Patna, Bihar',
    description:
      'Customized floral installations and seating arrangements for daytime Mehndi and Haldi celebrations.',
    image: '/src/assets/images/gallery_mehndi_haldi_decor_1791488866434.jpg',
    aspectClass: 'aspect-[3/4]',
    gridSpanClass: 'md:col-span-5',
  },
  {
    id: 'candlelit-banquet-tablescape',
    title: 'Elegant Table Settings & Catering',
    category: 'Table & Catering',
    location: 'Patna, Bihar',
    description:
      'Beautifully presented dining arrangements and floral table styling for wedding celebrations.',
    image: '/src/assets/images/gallery_table_catering_1791488854005.jpg',
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'md:col-span-7',
  },
  {
    id: 'botanical-canopy-reception',
    title: 'Outdoor Reception & Venue Styling',
    category: 'Reception & Venue',
    location: 'Patna, Bihar',
    description:
      'Outdoor wedding décor, suspended floral installations, seating, and entertainment setup.',
    image: '/src/assets/images/gallery_reception_venue_1791488877616.jpg',
    aspectClass: 'aspect-[16/9]',
    gridSpanClass: 'md:col-span-12',
  },
];

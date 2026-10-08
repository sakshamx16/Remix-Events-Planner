/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForEnquiry, setSelectedServiceForEnquiry] = useState<
    string | undefined
  >(undefined);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForEnquiry(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141312]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Gallery />
        <CallToAction />
        <Contact preselectedEventType={selectedServiceForEnquiry} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

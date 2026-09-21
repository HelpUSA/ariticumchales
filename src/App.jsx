import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AdminProvider } from './context/AdminContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickInfoBanner from './components/QuickInfoBanner';
import AccommodationsSection from './components/AccommodationsSection';
import AmenitiesSection from './components/AmenitiesSection';
import GastronomySection from './components/GastronomySection';
import BookingSection from './components/BookingSection';
import LocationSection from './components/LocationSection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import CookieBanner from './components/CookieBanner';
import PrivacyModal from './components/PrivacyModal';
import AdminModal from './components/Admin/AdminModal';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <LanguageProvider>
      <AdminProvider>
        <div className="min-h-screen font-sans bg-[#FAF7F2] text-gray-800">
          
          {/* Main Navigation Header */}
          <Navbar />

          {/* Hero Carousel */}
          <Hero />

          {/* Quick Info & Schedule Banner */}
          <QuickInfoBanner />

          {/* Accommodations Showcase */}
          <AccommodationsSection />

          {/* Amenities & Leisure */}
          <AmenitiesSection />

          {/* Gastronomy & Gourmet Kitchen */}
          <GastronomySection />

          {/* Booking Calculator & WhatsApp Quote */}
          <BookingSection />

          {/* Location & Map */}
          <LocationSection />

          {/* Instagram Feed */}
          <InstagramSection />

          {/* Footer */}
          <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />

          {/* Floating WhatsApp Button */}
          <WhatsAppFloatingButton />

          {/* Cookie Banner (LGPD) */}
          <CookieBanner onOpenPrivacy={() => setPrivacyOpen(true)} />

          {/* Privacy Modal */}
          <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />

          {/* Admin Management Modal */}
          <AdminModal />

        </div>
      </AdminProvider>
    </LanguageProvider>
  );
}

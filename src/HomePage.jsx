import React, { useEffect, useState } from 'react';
import { Leaf, Shield, Heart, CheckCircle, Phone, Mail, MapPin, Zap, Award, Droplet, Home, Building2, Sparkles } from 'lucide-react';

const HomePage = () => {
  const [visibleElements, setVisibleElements] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (!el.id) el.id = `animate-${Math.random().toString(36).substr(2, 9)}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* ==================== HERO SECTION ==================== */}
      <section 
        id="hero-section"
        data-animate="true"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100"></div>
        
        {/* Animated background shapes */}
        <div className="absolute -top-20 -left-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div 
          className="relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000"
          style={{
            transform: visibleElements['hero-section'] ? 'translateY(0)' : 'translateY(20px)',
            opacity: visibleElements['hero-section'] ? 1 : 0,
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
            Professional Cleaning Services for <span className="text-teal-600">Edinburgh</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 mb-3 sm:mb-4 font-light">
            Thistle Prime Cleaning - Trusted by hundreds of satisfied customers
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Award-winning cleaning services with attention to detail. We transform spaces into fresh, healthy environments using eco-friendly products and professional expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-slate-100 text-teal-600 font-semibold rounded-lg hover:bg-slate-200 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="services-title"
              data-animate="true"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 transition-all duration-1000"
              style={{
                transform: visibleElements['services-title'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['services-title'] ? 1 : 0,
              }}
            >
              Our Services
            </h2>
            <p 
              id="services-subtitle"
              data-animate="true"
              className="text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-1000"
              style={{
                transform: visibleElements['services-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['services-subtitle'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              Comprehensive cleaning solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'service-1',
                icon: Home,
                title: 'Residential Cleaning',
                description: 'Keep your home pristine with our regular cleaning, deep cleaning, and move-in/move-out services.',
                color: 'teal',
              },
              {
                id: 'service-2',
                icon: Building2,
                title: 'Commercial Cleaning',
                description: 'Professional office and commercial space cleaning to maintain a productive, healthy workplace.',
                color: 'emerald',
              },
              {
                id: 'service-3',
                icon: Sparkles,
                title: 'Specialized Cleaning',
                description: 'Post-construction, end-of-tenancy, and specialized deep cleaning services tailored to your needs.',
                color: 'blue',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const colorMap = {
                teal: 'from-teal-500 to-teal-600',
                emerald: 'from-emerald-500 to-emerald-600',
                blue: 'from-blue-500 to-blue-600',
              };
              
              return (
                <div
                  key={item.id}
                  id={item.id}
                  data-animate="true"
                  className={`p-6 sm:p-8 bg-gradient-to-br ${colorMap[item.color]} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white`}
                  style={{
                    transform: visibleElements[item.id] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                    opacity: visibleElements[item.id] ? 1 : 0,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="mb-4 p-3 bg-white/20 rounded-lg w-fit">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="leading-relaxed text-white/90">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="why-title"
              data-animate="true"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 transition-all duration-1000"
              style={{
                transform: visibleElements['why-title'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['why-title'] ? 1 : 0,
              }}
            >
              Why Choose Thistle Prime
            </h2>
            <p 
              id="why-subtitle"
              data-animate="true"
              className="text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-1000"
              style={{
                transform: visibleElements['why-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['why-subtitle'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              Excellence in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: 'why-1',
                icon: Award,
                title: 'Industry Experts',
                description: 'Trained and certified professionals with years of experience in professional cleaning.',
                color: 'teal',
              },
              {
                id: 'why-2',
                icon: Droplet,
                title: 'Eco-Friendly',
                description: 'We use premium, sustainable cleaning products safe for families and the environment.',
                color: 'emerald',
              },
              {
                id: 'why-3',
                icon: CheckCircle,
                title: '100% Guaranteed',
                description: 'Satisfaction guarantee - if you\'re not happy, we\'ll make it right or refund you.',
                color: 'blue',
              },
              {
                id: 'why-4',
                icon: Heart,
                title: 'Customer Care',
                description: 'Friendly, reliable service with attention to detail and respect for your home.',
                color: 'rose',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const colorMap = {
                teal: 'bg-teal-100 text-teal-600 hover:bg-teal-200',
                emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200',
                blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
                rose: 'bg-rose-100 text-rose-600 hover:bg-rose-200',
              };
              
              return (
                <div
                  key={item.id}
                  id={item.id}
                  data-animate="true"
                  className="p-6 sm:p-8 bg-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300"
                  style={{
                    transform: visibleElements[item.id] ? 'translateY(0)' : 'translateY(30px)',
                    opacity: visibleElements[item.id] ? 1 : 0,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${colorMap[item.color]} rounded-lg flex-shrink-0 transition-colors duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== TRUST BADGES ==================== */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-teal-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="trust-title"
              data-animate="true"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 transition-all duration-1000"
              style={{
                transform: visibleElements['trust-title'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['trust-title'] ? 1 : 0,
              }}
            >
              Trusted & Verified
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'badge-1', icon: '✓', title: 'Google Verified', description: 'Highly rated by our customers' },
              { id: 'badge-2', icon: '🌱', title: 'Eco-Certified', description: 'Sustainable cleaning practices' },
              { id: 'badge-3', icon: '💰', title: 'Money-Back Guarantee', description: 'Complete satisfaction guaranteed' },
            ].map((badge, index) => (
              <div 
                key={badge.id}
                id={badge.id}
                data-animate="true"
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-teal-200"
                style={{
                  transform: visibleElements[badge.id] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements[badge.id] ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{badge.title}</h3>
                <p className="text-slate-600 text-sm">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-emerald-600 w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="cta-title"
            data-animate="true"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000"
            style={{
              transform: visibleElements['cta-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-title'] ? 1 : 0,
            }}
          >
            Ready for a Spotless Space?
          </h2>
          <p 
            id="cta-subtitle"
            data-animate="true"
            className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed transition-all duration-1000"
            style={{
              transform: visibleElements['cta-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-subtitle'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            Get in touch today for a free quote. Our team is ready to transform your space.
          </p>
          <div 
            id="cta-buttons"
            data-animate="true"
            className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000"
            style={{
              transform: visibleElements['cta-buttons'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-buttons'] ? 1 : 0,
              transitionDelay: '200ms',
            }}
          >
            <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
            <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition-all duration-300 border-2 border-white/20">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <a 
              href="tel:+447440620492" 
              id="contact-phone"
              data-animate="true"
              className="flex items-center justify-center md:justify-start gap-4 hover:text-teal-400 transition-colors group"
              style={{
                transform: visibleElements['contact-phone'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['contact-phone'] ? 1 : 0,
              }}
            >
              <div className="p-3 bg-teal-600 rounded-lg group-hover:bg-teal-500 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-300">Call Us</p>
                <p className="font-semibold">+44 7440 620492</p>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:thistleprimecleaning@gmail.com" 
              id="contact-email"
              data-animate="true"
              className="flex items-center justify-center md:justify-start gap-4 hover:text-teal-400 transition-colors group"
              style={{
                transform: visibleElements['contact-email'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['contact-email'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              <div className="p-3 bg-teal-600 rounded-lg group-hover:bg-teal-500 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-300">Email Us</p>
                <p className="font-semibold">thistleprimecleaning@gmail.com</p>
              </div>
            </a>

            {/* Address */}
            <a 
              href="https://maps.google.com/?q=17-2+Murdoch+Terrace,+Edinburgh+EH11+1BD" 
              target="_blank" 
              rel="noopener noreferrer" 
              id="contact-address"
              data-animate="true"
              className="flex items-center justify-center md:justify-start gap-4 hover:text-teal-400 transition-colors group"
              style={{
                transform: visibleElements['contact-address'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['contact-address'] ? 1 : 0,
                transitionDelay: '200ms',
              }}
            >
              <div className="p-3 bg-teal-600 rounded-lg group-hover:bg-teal-500 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-300">Address</p>
                <p className="font-semibold text-sm">17-2 Murdoch Terrace, Edinburgh EH11 1BD</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-400 text-center w-full overflow-x-hidden">
        <p>&copy; 2024-2026 Thistle Prime Cleaning. All rights reserved. Based in Edinburgh, Scotland.</p>
      </footer>
    </div>
  );
};

export default HomePage;

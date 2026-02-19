import React, { useEffect, useState } from 'react';
import { Shield, Droplet, DoorOpen, Building2, Wind, Sofa } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
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

  const services = [
    {
      id: 'domestic-cleaning',
      name: 'Regular Domestic Cleaning',
      price: '£15 – £28 per hour',
      description: 'Professional routine home cleaning including surfaces, kitchens, bathrooms, dusting, vacuuming, and mopping. Ideal for weekly or bi-weekly maintenance.',
      features: [
        'Dusting and surface cleaning',
        'Kitchen and bathroom deep clean',
        'Vacuuming and mopping',
        'Flexible scheduling',
        'Eco-friendly products'
      ],
      icon: <Shield className="w-8 h-8 text-teal-600" />,
    },
    {
      id: 'deep-cleaning',
      name: 'One-Off Deep Cleaning',
      price: '£90 – £180',
      description: 'Comprehensive top-to-bottom cleaning service designed for seasonal refresh, post-event cleaning, or detailed home sanitization.',
      features: [
        'Complete property refresh',
        'High-reach areas included',
        'Appliance cleaning',
        'Post-event ready',
        'Professional sanitization'
      ],
      icon: <Droplet className="w-8 h-8 text-teal-600" />,
    },
    {
      id: 'end-of-tenancy',
      name: 'End of Tenancy Cleaning',
      price: '£120 – £430+',
      description: 'Detailed move-in/move-out cleaning service meeting landlord and agency standards. Includes deep cleaning of all rooms, appliances, and surfaces.',
      features: [
        'Landlord-approved standard',
        'All rooms included',
        'Appliance cleaning',
        'Carpet and upholstery',
        'Deposit protection'
      ],
      icon: <DoorOpen className="w-8 h-8 text-teal-600" />,
    },
    {
      id: 'office-cleaning',
      name: 'Office Cleaning',
      price: '£16 – £35+ per hour',
      description: 'Professional commercial cleaning for offices and workplaces, ensuring a clean, hygienic, and productive environment.',
      features: [
        'Regular or one-off service',
        'Workplace sanitization',
        'Desk and surface cleaning',
        'Waste management',
        'Flexible scheduling'
      ],
      icon: <Building2 className="w-8 h-8 text-teal-600" />,
    },
    {
      id: 'window-cleaning',
      name: 'Window Cleaning',
      price: 'Varies per property',
      description: 'Interior and exterior window cleaning service delivering streak-free, crystal-clear results for homes and businesses.',
      features: [
        'Interior and exterior',
        'Streak-free finish',
        'High-access equipment',
        'Residential and commercial',
        'Regular maintenance plans'
      ],
      icon: <Wind className="w-8 h-8 text-teal-600" />,
    },
    {
      id: 'carpet-upholstery',
      name: 'Carpet & Upholstery Cleaning',
      price: 'Varies per room/item',
      description: 'Deep steam cleaning and stain removal for carpets, sofas, and upholstery using professional-grade equipment.',
      features: [
        'Steam cleaning technology',
        'Stain removal',
        'Odor elimination',
        'Fabric-safe products',
        'Quick drying'
      ],
      icon: <Sofa className="w-8 h-8 text-teal-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            id="services-hero-title"
            data-animate="true"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['services-hero-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['services-hero-title'] ? 1 : 0,
            }}
          >
            Our Professional Cleaning <span className="text-teal-600">Services</span>
          </h1>
          <p
            id="services-hero-subtitle"
            data-animate="true"
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000"
            style={{
              transform: visibleElements['services-hero-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['services-hero-subtitle'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            Reliable • Affordable • Trusted Across Scotland
          </p>
          <p
            id="services-hero-desc"
            data-animate="true"
            className="text-base text-slate-600 max-w-2xl mx-auto mt-4 transition-all duration-1000"
            style={{
              transform: visibleElements['services-hero-desc'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['services-hero-desc'] ? 1 : 0,
              transitionDelay: '200ms',
            }}
          >
            Explore our comprehensive range of professional cleaning solutions, from regular domestic maintenance to specialized deep cleaning services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-teal-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2
            id="trust-badges-title"
            data-animate="true"
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['trust-badges-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['trust-badges-title'] ? 1 : 0,
            }}
          >
            Why Choose Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'badge-eco',
                icon: '🌱',
                title: 'Eco-Friendly',
                desc: 'Using sustainable, environmentally safe cleaning products for every service.'
              },
              {
                id: 'badge-guarantee',
                icon: '✓',
                title: 'Satisfaction Guaranteed',
                desc: 'Complete satisfaction or your money back. We stand behind our work.'
              },
              {
                id: 'badge-insured',
                icon: '🛡️',
                title: 'Fully Insured',
                desc: 'Fully insured and certified professionals for your peace of mind.'
              },
            ].map((badge, idx) => (
              <div
                key={badge.id}
                id={badge.id}
                data-animate="true"
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-teal-200"
                style={{
                  transform: visibleElements[badge.id] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements[badge.id] ? 1 : 0,
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{badge.title}</h3>
                <p className="text-slate-600 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-emerald-600 w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="cta-services-title"
            data-animate="true"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000"
            style={{
              transform: visibleElements['cta-services-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-services-title'] ? 1 : 0,
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            id="cta-services-desc"
            data-animate="true"
            className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed transition-all duration-1000"
            style={{
              transform: visibleElements['cta-services-desc'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-services-desc'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            Contact us today for a free quote or book a service online.
          </p>
          <div
            id="cta-services-buttons"
            data-animate="true"
            className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000"
            style={{
              transform: visibleElements['cta-services-buttons'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-services-buttons'] ? 1 : 0,
              transitionDelay: '200ms',
            }}
          >
            <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
            <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition-all duration-300 border-2 border-white/20">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <a href="tel:+447440620492" className="hover:text-teal-400 transition-colors">
              <p className="text-sm text-slate-300">Call Us</p>
              <p className="font-semibold">+44 7440 620492</p>
            </a>
            <a href="mailto:thistleprimecleaning@gmail.com" className="hover:text-teal-400 transition-colors">
              <p className="text-sm text-slate-300">Email Us</p>
              <p className="font-semibold">thistleprimecleaning@gmail.com</p>
            </a>
            <a href="https://maps.google.com/?q=17-2+Murdoch+Terrace,+Edinburgh+EH11+1BD" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <p className="text-sm text-slate-300">Address</p>
              <p className="font-semibold text-sm">17-2 Murdoch Terrace, Edinburgh EH11 1BD</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-400 text-center w-full overflow-x-hidden">
        <p>&copy; 2024-2026 Thistle Prime Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;

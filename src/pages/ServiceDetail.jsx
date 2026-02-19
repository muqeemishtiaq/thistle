import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Shield, Zap, Award } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [visibleElements, setVisibleElements] = useState({});

  const servicesData = {
    'domestic-cleaning': {
      title: 'Regular Domestic Cleaning',
      price: '£15 – £28 per hour',
      description: 'Professional routine home cleaning including surfaces, kitchens, bathrooms, dusting, vacuuming, and mopping. Keep your home fresh and clean with our reliable weekly or bi-weekly maintenance service.',
      fullDescription: 'Our Regular Domestic Cleaning service is perfect for busy homeowners and families who want to maintain a clean, healthy living space without the hassle. Our professional team handles all the details, from kitchen surfaces and bathroom tiles to carpets and hardwood floors.',
      features: [
        'Dusting and surface cleaning',
        'Kitchen and bathroom deep clean',
        'Vacuuming and mopping',
        'Flexible scheduling',
        'Eco-friendly products',
        'Professional staff'
      ],
      whatIncluded: [
        'General tidying and organizing',
        'Dusting of all surfaces and furniture',
        'Vacuuming and mopping floors',
        'Bathroom cleaning and sanitization',
        'Kitchen cleaning and degreasing',
        'Waste removal',
        'Windows and mirrors'
      ],
      pricing: {
        hourly: '£15 - £28 per hour',
        weekly: 'Special weekly rates available',
        biweekly: 'Discounts for recurring bookings'
      }
    },
    'deep-cleaning': {
      title: 'One-Off Deep Cleaning',
      price: '£90 – £180',
      description: 'Comprehensive top-to-bottom cleaning service designed for seasonal refresh, post-event cleaning, or detailed home sanitization.',
      fullDescription: 'Our Deep Cleaning service is a comprehensive, intensive cleaning that goes beyond regular maintenance. Perfect for spring refresh, post-party cleanup, or when you need every corner spotless.',
      features: [
        'Complete property refresh',
        'High-reach areas included',
        'Appliance cleaning',
        'Post-event ready',
        'Professional sanitization',
        'Grout and tile deep clean'
      ],
      whatIncluded: [
        'All regular cleaning services',
        'Inside and on top of cabinets',
        'Oven and appliance cleaning',
        'Grout and tile scrubbing',
        'Baseboards and trim',
        'Light fixtures cleaning',
        'Deep furniture cleaning',
        'Carpet spot treatment'
      ],
      pricing: {
        oneOff: '£90 - £180 depending on property size',
        negotiable: 'Quote based on property details'
      }
    },
    'end-of-tenancy': {
      title: 'End of Tenancy Cleaning',
      price: '£120 – £430+',
      description: 'Detailed move-in/move-out cleaning service meeting landlord and agency standards. Includes deep cleaning of all rooms, appliances, and surfaces.',
      fullDescription: 'Whether you\'re moving out or receiving a new property, our End of Tenancy Cleaning ensures everything meets the highest landlord and agency standards. We handle all the details so you can pass inspection first time.',
      features: [
        'Landlord-approved standard',
        'All rooms included',
        'Appliance cleaning',
        'Carpet and upholstery',
        'Deposit protection',
        'Agency inspection ready'
      ],
      whatIncluded: [
        'Complete deep clean of all rooms',
        'Appliance cleaning (cooker, microwave, fridge)',
        'Carpet spot cleaning or steam cleaning',
        'Walls cleaned and scuff marks removed',
        'Skirting boards cleaned',
        'Light fittings and switches cleaned',
        'Bathroom sanitization',
        'Kitchen degreasing',
        'Garden/outdoor area (if applicable)',
        'Professional final inspection'
      ],
      pricing: {
        studio: 'From £120 (studio apartments)',
        threeBed: 'From £250 (3-bed houses)',
        largeProp: 'From £430+ (large properties)'
      }
    },
    'office-cleaning': {
      title: 'Office Cleaning',
      price: '£16 – £35+ per hour',
      description: 'Professional commercial cleaning for offices and workplaces, ensuring a clean, hygienic, and productive environment.',
      fullDescription: 'Our Office Cleaning service maintains a professional, hygienic workspace that enhances productivity and makes a great impression on clients and employees.',
      features: [
        'Regular or one-off service',
        'Workplace sanitization',
        'Desk and surface cleaning',
        'Waste management',
        'Flexible scheduling',
        'Out-of-hours service available'
      ],
      whatIncluded: [
        'Desk and surface dusting',
        'Bathroom sanitization',
        'Floor cleaning and mopping',
        'Vacuum and carpet cleaning',
        'Waste removal and recycling',
        'Window cleaning',
        'Kitchen area cleaning',
        'Disinfection services'
      ],
      pricing: {
        hourly: '£16 - £35+ per hour',
        daily: 'Daily contracts available',
        weekly: 'Weekly and monthly packages'
      }
    },
    'window-cleaning': {
      title: 'Window Cleaning',
      price: 'Varies per property',
      description: 'Interior and exterior window cleaning service delivering streak-free, crystal-clear results for homes and businesses.',
      fullDescription: 'Professional window cleaning using the latest techniques and equipment to deliver pristine, streak-free results. We handle both residential and commercial properties, including hard-to-reach areas.',
      features: [
        'Interior and exterior',
        'Streak-free finish',
        'High-access equipment',
        'Residential and commercial',
        'Regular maintenance plans',
        'Safety-certified professionals'
      ],
      whatIncluded: [
        'Exterior window cleaning',
        'Interior window cleaning',
        'Frame and sill cleaning',
        'Hard-to-reach windows (with access equipment)',
        'Conservatory and skylight cleaning',
        'Gutter cleaning (optional)',
        'Professional solution application'
      ],
      pricing: {
        residential: 'Varies based on window count',
        commercial: 'Quote upon inspection',
        maintenance: 'Monthly or quarterly packages available'
      }
    },
    'carpet-upholstery': {
      title: 'Carpet & Upholstery Cleaning',
      price: 'Varies per room/item',
      description: 'Deep steam cleaning and stain removal for carpets, sofas, and upholstery using professional-grade equipment.',
      fullDescription: 'Our professional carpet and upholstery cleaning service revives your furnishings, removes stubborn stains, and extends the life of your carpets and furniture.',
      features: [
        'Steam cleaning technology',
        'Stain removal',
        'Odor elimination',
        'Fabric-safe products',
        'Quick drying',
        'Professional pretreatment'
      ],
      whatIncluded: [
        'Pre-inspection and stain identification',
        'High-powered steam extraction',
        'Specialized stain treatment',
        'Odor neutralization',
        'Protectant application (optional)',
        'Furniture moving (where safe)',
        'Spot checks upon completion'
      ],
      pricing: {
        perRoom: 'Prices vary by room size',
        perItem: 'Individual furniture quotes',
        packages: 'Package deals for multiple rooms'
      }
    }
  };

  const currentService = servicesData[serviceName];

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
  }, [serviceName]);

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/services')}
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Back Button */}
      <div className="pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h1
            id="detail-title"
            data-animate="true"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['detail-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['detail-title'] ? 1 : 0,
            }}
          >
            {currentService.title}
          </h1>
          <p
            id="detail-desc"
            data-animate="true"
            className="text-lg text-slate-600 max-w-3xl leading-relaxed transition-all duration-1000"
            style={{
              transform: visibleElements['detail-desc'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['detail-desc'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            {currentService.fullDescription}
          </p>
          <div
            id="detail-price"
            data-animate="true"
            className="mt-6 inline-block px-6 py-3 bg-teal-600 text-white font-bold text-xl rounded-lg transition-all duration-1000"
            style={{
              transform: visibleElements['detail-price'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['detail-price'] ? 1 : 0,
              transitionDelay: '200ms',
            }}
          >
            {currentService.price}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2
            id="whats-included-title"
            data-animate="true"
            className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['whats-included-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['whats-included-title'] ? 1 : 0,
            }}
          >
            What's Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentService.whatIncluded.map((item, idx) => (
              <div
                key={idx}
                id={`included-${idx}`}
                data-animate="true"
                className="flex gap-4 transition-all duration-1000"
                style={{
                  transform: visibleElements[`included-${idx}`] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements[`included-${idx}`] ? 1 : 0,
                  transitionDelay: `${idx * 50}ms`,
                }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                  <span className="text-teal-600 font-bold text-sm">✓</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-teal-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2
            id="features-title"
            data-animate="true"
            className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['features-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['features-title'] ? 1 : 0,
            }}
          >
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentService.features.map((feature, idx) => (
              <div
                key={idx}
                id={`feature-${idx}`}
                data-animate="true"
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-200"
                style={{
                  transform: visibleElements[`feature-${idx}`] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements[`feature-${idx}`] ? 1 : 0,
                  transitionDelay: `${idx * 75}ms`,
                }}
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2
            id="pricing-title"
            data-animate="true"
            className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['pricing-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['pricing-title'] ? 1 : 0,
            }}
          >
            Pricing Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(currentService.pricing).map(([key, value], idx) => (
              <div
                key={key}
                id={`price-${idx}`}
                data-animate="true"
                className="p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl shadow-lg border border-teal-200 transition-all duration-1000"
                style={{
                  transform: visibleElements[`price-${idx}`] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements[`price-${idx}`] ? 1 : 0,
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </h3>
                <p className="text-teal-600 font-semibold text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-teal-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2
            id="why-choose-title"
            data-animate="true"
            className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['why-choose-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['why-choose-title'] ? 1 : 0,
            }}
          >
            Why Choose This Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: 'Professional Team', desc: 'Trained and certified professionals' },
              { icon: Zap, title: 'Quick & Efficient', desc: 'Fast, effective cleaning results' },
              { icon: Award, title: 'Best Quality', desc: 'Premium service standards' },
              { icon: Heart, title: 'Customer Care', desc: 'Your satisfaction is guaranteed' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  id={`why-${idx}`}
                  data-animate="true"
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 transition-all duration-1000"
                  style={{
                    transform: visibleElements[`why-${idx}`] ? 'translateY(0)' : 'translateY(20px)',
                    opacity: visibleElements[`why-${idx}`] ? 1 : 0,
                    transitionDelay: `${idx * 100}ms`,
                  }}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-emerald-600 w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="cta-detail-title"
            data-animate="true"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000"
            style={{
              transform: visibleElements['cta-detail-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-detail-title'] ? 1 : 0,
            }}
          >
            Ready to Book This Service?
          </h2>
          <p
            id="cta-detail-desc"
            data-animate="true"
            className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed transition-all duration-1000"
            style={{
              transform: visibleElements['cta-detail-desc'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-detail-desc'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            Get in touch today for a free quote or schedule your service online.
          </p>
          <div
            id="cta-detail-buttons"
            data-animate="true"
            className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000"
            style={{
              transform: visibleElements['cta-detail-buttons'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-detail-buttons'] ? 1 : 0,
              transitionDelay: '200ms',
            }}
          >
            <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
            <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition-all duration-300 border-2 border-white/20">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-slate-300 mb-4">Questions? Contact us anytime</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+447440620492" className="hover:text-teal-400 transition-colors">
              <p className="font-semibold">+44 7440 620492</p>
            </a>
            <a href="mailto:thistleprimecleaning@gmail.com" className="hover:text-teal-400 transition-colors">
              <p className="font-semibold">thistleprimecleaning@gmail.com</p>
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

export default ServiceDetail;

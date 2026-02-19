import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplet, Wind, DoorOpen, Building2, Eye, Sofa, ChevronRight, Shield, Heart, Award } from 'lucide-react';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const navigate = useNavigate();
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
      id: 'regular-domestic-cleaning',
      name: 'Regular Domestic Cleaning',
      icon: Droplet,
      description: 'Professional routine home cleaning including surfaces, kitchens, bathrooms, dusting, vacuuming, and mopping. Ideal for weekly or bi-weekly maintenance.',
      price: '£15 – £28/hr',
    },
    {
      id: 'one-off-deep-cleaning',
      name: 'One-Off Deep Cleaning',
      icon: Wind,
      description: 'Comprehensive top-to-bottom cleaning service designed for seasonal refresh, post-event cleaning, or detailed home sanitization.',
      price: '£90 – £180',
    },
    {
      id: 'end-of-tenancy-cleaning',
      name: 'End of Tenancy Cleaning',
      icon: DoorOpen,
      description: 'Detailed move-in/move-out cleaning service meeting landlord and agency standards. Includes deep cleaning of all rooms, appliances, and surfaces.',
      price: '£120 – £430+',
    },
    {
      id: 'office-cleaning',
      name: 'Office Cleaning',
      icon: Building2,
      description: 'Professional commercial cleaning for offices and workplaces, ensuring a clean, hygienic, and productive environment.',
      price: '£16 – £35+/hr',
    },
    {
      id: 'window-cleaning',
      name: 'Window Cleaning',
      icon: Eye,
      description: 'Interior and exterior window cleaning service delivering streak-free, crystal-clear results for homes and businesses.',
      price: 'Varies',
    },
    {
      id: 'carpet-upholstery-cleaning',
      name: 'Carpet & Upholstery Cleaning',
      icon: Sofa,
      description: 'Deep steam cleaning and stain removal for carpets, sofas, and upholstery using professional-grade equipment.',
      price: 'Varies',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            id="services-title"
            data-animate="true"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['services-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['services-title'] ? 1 : 0,
            }}
          >
            Our Professional Cleaning Services
          </h1>
          <p 
            id="services-subtitle"
            data-animate="true"
            className="text-xl md:text-2xl text-teal-600 font-semibold mb-4 transition-all duration-1000"
            style={{
              transform: visibleElements['services-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['services-subtitle'] ? 1 : 0,
              transitionDelay: '50ms',
            }}
          >
            Reliable • Affordable • Trusted Across Scotland
          </p>
          <p 
            id="services-desc"
            data-animate="true"
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000"
            style={{
              transform: visibleElements['services-desc'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['services-desc'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            From routine maintenance to specialized deep cleaning, we deliver premium services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={`service-${index}`}
                  data-animate="true"
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-slate-100 hover:border-teal-300 overflow-hidden transition-all duration-300 cursor-pointer group h-full flex flex-col"
                  onClick={() => navigate(`/services/${service.id}`)}
                  style={{
                    transform: visibleElements[`service-${index}`] ? 'translateY(0)' : 'translateY(20px)',
                    opacity: visibleElements[`service-${index}`] ? 1 : 0,
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Icon Header */}
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-slate-50 border-b border-teal-100">
                    <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>
                    
                    {/* Price Section */}
                    <div className="mt-auto pt-4 border-t border-slate-200">
                      <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Pricing</p>
                      <p className="text-lg font-bold text-teal-600">{service.price}</p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="px-6 pb-6">
                    <button className="w-full px-4 py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2">
                      View Details
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              id="badge-0"
              data-animate="true"
              className="text-center transition-all duration-1000"
              style={{
                transform: visibleElements['badge-0'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['badge-0'] ? 1 : 0,
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <Heart size={24} className="text-teal-600" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Eco-Friendly</h3>
              <p className="text-slate-600 text-sm">We use environmentally safe, sustainable cleaning products</p>
            </div>

            <div
              id="badge-1"
              data-animate="true"
              className="text-center transition-all duration-1000"
              style={{
                transform: visibleElements['badge-1'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['badge-1'] ? 1 : 0,
                transitionDelay: '50ms',
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <Award size={24} className="text-teal-600" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-slate-600 text-sm">100% satisfaction or we'll return for free re-cleaning</p>
            </div>

            <div
              id="badge-2"
              data-animate="true"
              className="text-center transition-all duration-1000"
              style={{
                transform: visibleElements['badge-2'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['badge-2'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <Shield size={24} className="text-teal-600" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Fully Insured</h3>
              <p className="text-slate-600 text-sm">Comprehensive coverage for complete peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-emerald-600 w-full overflow-x-hidden">
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
            Ready to Get Started?
          </h2>
          <p 
            id="cta-desc"
            data-animate="true"
            className="text-lg md:text-xl text-teal-50 mb-8 transition-all duration-1000"
            style={{
              transform: visibleElements['cta-desc'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['cta-desc'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            Contact us today for a free quote and personalized service plan.
          </p>
          <button 
            id="cta-button"
            data-animate="true"
            onClick={() => navigate('/order')}
            className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl transition-all duration-1000"
            style={{
              transform: visibleElements['cta-button'] ? 'scale(1)' : 'scale(0.95)',
              opacity: visibleElements['cta-button'] ? 1 : 0,
              transitionDelay: '200ms',
            }}
          >
            Book Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Shield, Heart, CheckCircle, Phone, Mail, MapPin, Zap, Award, Droplet, Home, Building2, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

const HomePage = () => {
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

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section 
        id="hero-section"
        data-animate="true"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100"></div>
        
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
            <button onClick={() => navigate('/order')} className="px-6 sm:px-8 py-2 sm:py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                color: 'from-teal-500 to-teal-600',
              },
              {
                id: 'service-2',
                icon: Building2,
                title: 'Commercial Cleaning',
                description: 'Professional office and commercial space cleaning to maintain a productive, healthy workplace.',
                color: 'from-emerald-500 to-emerald-600',
              },
              {
                id: 'service-3',
                icon: Sparkles,
                title: 'Specialized Cleaning',
                description: 'Post-construction, end-of-tenancy, and specialized deep cleaning services tailored to your needs.',
                color: 'from-blue-500 to-blue-600',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div
                  key={item.id}
                  id={item.id}
                  data-animate="true"
                  className={`p-6 sm:p-8 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white`}
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

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">Why Choose Thistle Prime</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'why-1', icon: Award, title: 'Expert Team', description: 'Trained professionals with years of experience.' },
              { id: 'why-2', icon: Droplet, title: 'Eco-Friendly', description: 'Sustainable products safe for your family.' },
              { id: 'why-3', icon: CheckCircle, title: 'Guaranteed', description: 'Complete satisfaction or your money back.' },
              { id: 'why-4', icon: Heart, title: 'Care & Attention', description: 'Professional service with personal touch.' },
            ].map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div
                  key={item.id}
                  id={item.id}
                  data-animate="true"
                  className="p-6 sm:p-8 bg-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                  style={{
                    transform: visibleElements[item.id] ? 'translateY(0)' : 'translateY(30px)',
                    opacity: visibleElements[item.id] ? 1 : 0,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 text-teal-600 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-emerald-600 w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Ready for a Spotless Space?
          </h2>
          <p className="text-lg md:text-xl text-teal-50 mb-8">
            Get in touch today for a free quote. Our team is ready to transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/order')} className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg">
              Book Now
            </button>
            <button onClick={() => navigate('/contact')} className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Edinburgh Map Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              id="map-title"
              data-animate="true"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 transition-all duration-1000"
              style={{
                transform: visibleElements['map-title'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['map-title'] ? 1 : 0,
              }}
            >
              We Serve Edinburgh & All of Scotland
            </h2>
            <p 
              id="map-subtitle"
              data-animate="true"
              className="text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-1000"
              style={{
                transform: visibleElements['map-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['map-subtitle'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              Based in Edinburgh with service coverage across Scotland
            </p>
          </div>

          <div 
            id="map-container"
            data-animate="true"
            className="rounded-2xl overflow-hidden shadow-xl mb-8 transition-all duration-1000"
            style={{
              transform: visibleElements['map-container'] ? 'scale(1)' : 'scale(0.95)',
              opacity: visibleElements['map-container'] ? 1 : 0,
            }}
          >
            <iframe 
              width="100%" 
              height="500" 
              style={{ border: 0, display: 'block' }} 
              loading="lazy" 
              allowFullScreen=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.8697698206326!2d-3.264851!3d55.8763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c2e43e6e0001%3A0x2e8e8e8e8e8e8e8e!2s17-2%20Murdoch%20Terrace%2C%20Edinburgh%20EH11%201BD%2C%20UK!5e0!3m2!1sen!2suk!4v1708336800000"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'coverage-1',
                title: 'Headquarters',
                description: '17-2 Murdoch Terrace, Edinburgh EH11 1BD, United Kingdom',
              },
              {
                id: 'coverage-2',
                title: 'Service Area',
                description: 'Edinburgh, Midlothian, West Lothian, and across Scotland',
              },
              {
                id: 'coverage-3',
                title: 'Quick Response',
                description: 'Same-day or next-day service availability in most areas',
              },
            ].map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                data-animate="true"
                className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-teal-600 transition-all duration-1000"
                style={{
                  transform: visibleElements[item.id] ? 'translateX(0)' : 'translateX(-30px)',
                  opacity: visibleElements[item.id] ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;

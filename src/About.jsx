import React, { useEffect, useState } from 'react';
import { Leaf, Shield, Heart, CheckCircle, Phone, Mail, MapPin, Zap, Award, Droplet } from 'lucide-react';

const AboutPage = () => {
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
      {/* ==================== ABOUT HERO ==================== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            id="about-title"
            data-animate="true"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['about-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['about-title'] ? 1 : 0,
            }}
          >
            About <span className="text-teal-600">Thistle Prime Cleaning</span>
          </h1>
          <p 
            id="about-subtitle"
            data-animate="true"
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000"
            style={{
              transform: visibleElements['about-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['about-subtitle'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            Committed to delivering exceptional cleaning services with reliability, professional standards, and customer satisfaction at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* ==================== WHO WE ARE ==================== */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Who We Are */}
            <div 
              id="who-we-are"
              data-animate="true"
              className="p-6 sm:p-8 bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100"
              style={{
                transform: visibleElements['who-we-are'] ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleElements['who-we-are'] ? 1 : 0,
              }}
            >
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Who We Are</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Thistle Prime Cleaning is a professional cleaning company based in Edinburgh, Scotland, dedicated to delivering high-quality residential and commercial cleaning services with integrity and excellence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fully insured and certified professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Customer-focused and transparent approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Eco-friendly cleaning methods and products</span>
                </li>
              </ul>
            </div>

            {/* Our Commitment */}
            <div 
              id="our-commitment"
              data-animate="true"
              className="p-6 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
              style={{
                transform: visibleElements['our-commitment'] ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleElements['our-commitment'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Commitment</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Every cleaning task is performed with meticulous attention to detail and deep respect for your space. We believe a clean environment contributes to health, wellbeing, and peace of mind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Trained and professional staff members</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Reliable and consistent service delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Transparent and competitive pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION, VISION & VALUES ==================== */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-teal-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="mvv-title"
              data-animate="true"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 transition-all duration-1000"
              style={{
                transform: visibleElements['mvv-title'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['mvv-title'] ? 1 : 0,
              }}
            >
              Our Mission, Vision & Values
            </h2>
            <p 
              id="mvv-subtitle"
              data-animate="true"
              className="text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-1000"
              style={{
                transform: visibleElements['mvv-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['mvv-subtitle'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div 
              id="mission"
              data-animate="true"
              className="p-6 sm:p-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              style={{
                transform: visibleElements['mission'] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleElements['mission'] ? 1 : 0,
              }}
            >
              <div className="mb-4 p-3 bg-white/20 rounded-lg w-fit">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="leading-relaxed text-white/90">
                Deliver reliable, affordable, and professional cleaning services that create healthy, fresh, and inspiring environments for our customers across Scotland.
              </p>
            </div>

            {/* Vision */}
            <div 
              id="vision"
              data-animate="true"
              className="p-6 sm:p-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              style={{
                transform: visibleElements['vision'] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleElements['vision'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              <div className="mb-4 p-3 bg-white/20 rounded-lg w-fit">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="leading-relaxed text-white/90">
                Become Scotland's most trusted and sustainable cleaning brand, setting new standards in cleanliness, environmental responsibility, and exceptional customer care.
              </p>
            </div>

            {/* Values */}
            <div 
              id="values"
              data-animate="true"
              className="p-6 sm:p-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              style={{
                transform: visibleElements['values'] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleElements['values'] ? 1 : 0,
                transitionDelay: '200ms',
              }}
            >
              <div className="mb-4 p-3 bg-white/20 rounded-lg w-fit">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-white/90">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span> Quality Excellence
                </li>
                <li className="flex items-center text-white/90">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span> Honesty & Integrity
                </li>
                <li className="flex items-center text-white/90">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span> Customer Satisfaction
                </li>
                <li className="flex items-center text-white/90">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span> Environmental Care
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY TRUST US ==================== */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
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
              Why Customers Trust Us
            </h2>
            <p 
              id="trust-subtitle"
              data-animate="true"
              className="text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-1000"
              style={{
                transform: visibleElements['trust-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['trust-subtitle'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              Trusted by hundreds of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: 'trust-1',
                icon: Award,
                title: 'Experienced & Trained Staff',
                description: 'Our team consists of professional, vetted cleaners with extensive training in the latest cleaning techniques and safety protocols.',
                color: 'teal',
              },
              {
                id: 'trust-2',
                icon: Droplet,
                title: 'Premium Quality Equipment',
                description: 'We use high-quality, eco-friendly cleaning products and state-of-the-art equipment engineered for superior results.',
                color: 'emerald',
              },
              {
                id: 'trust-3',
                icon: CheckCircle,
                title: 'Satisfaction Guarantee',
                description: 'We stand behind our work with a comprehensive guarantee—complete satisfaction or your money back, period.',
                color: 'blue',
              },
              {
                id: 'trust-4',
                icon: Heart,
                title: 'Reliable & Friendly Service',
                description: 'Our team is courteous, professional, and committed to building lasting relationships with every customer.',
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

      {/* ==================== OUR PROCESS ==================== */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="process-title"
              data-animate="true"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 transition-all duration-1000"
              style={{
                transform: visibleElements['process-title'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['process-title'] ? 1 : 0,
              }}
            >
              How We Work
            </h2>
            <p 
              id="process-subtitle"
              data-animate="true"
              className="text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-1000"
              style={{
                transform: visibleElements['process-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['process-subtitle'] ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              A simple, straightforward 4-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Book Your Service', description: 'Contact us via phone, email, or our website to schedule your cleaning at a time that works best for you.' },
              { step: '02', title: 'Choose Cleaning Type', description: 'Select from our range of residential or commercial cleaning packages tailored to your needs.' },
              { step: '03', title: 'Professional Team Arrives', description: 'Our trained team arrives fully prepared with all necessary professional-grade equipment and supplies.' },
              { step: '04', title: 'Enjoy Your Clean Space', description: 'Relax while we transform your space into a fresh, spotless, healthy environment you\'ll love.' },
            ].map((item, index) => (
              <div
                key={item.step}
                id={`process-${index}`}
                data-animate="true"
                className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                style={{
                  transform: visibleElements[`process-${index}`] ? 'translateY(0)' : 'translateY(30px)',
                  opacity: visibleElements[`process-${index}`] ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-6">
                  <div className="text-5xl font-bold text-teal-600">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EDINBURGH MAP ==================== */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 
              id="map-title"
              data-animate="true"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 transition-all duration-1000"
              style={{
                transform: visibleElements['map-title'] ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleElements['map-title'] ? 1 : 0,
              }}
            >
              We Serve All of Edinburgh
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
              Based in Edinburgh, available throughout the city and surrounding areas
            </p>
          </div>

          <div 
            id="map-container"
            data-animate="true"
            className="rounded-2xl shadow-lg overflow-hidden border-2 border-teal-200"
            style={{
              transform: visibleElements['map-container'] ? 'scale(1)' : 'scale(0.95)',
              opacity: visibleElements['map-container'] ? 1 : 0,
              transitionDelay: '200ms',
            }}
          >
            <iframe
              title="Thistle Prime Cleaning Location - Edinburgh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.0813769235456!2d-3.2869!3d55.8799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b44d5bd5c9c9%3A0x1b6c8b9f8e8e8e8e!2s17-2%20Murdoch%20Terrace%2C%20Edinburgh%20EH11%201BD!5e0!3m2!1sen!2suk!4v1707000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          {/* Service Area Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                id: 'service-1',
                title: 'Complete Coverage',
                description: 'We serve all neighborhoods in Edinburgh including Morningside, Leith, Corstorphine, and beyond.',
              },
              {
                id: 'service-2',
                title: 'Flexible Scheduling',
                description: 'Convenient booking times to fit your schedule. Same-day and next-day appointments available.',
              },
              {
                id: 'service-3',
                title: 'Same Trusted Team',
                description: 'Your dedicated cleaning team understands your unique needs and preferences for consistent results.',
              },
            ].map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                data-animate="true"
                className="p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                style={{
                  transform: visibleElements[item.id] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements[item.id] ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
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

export default AboutPage;


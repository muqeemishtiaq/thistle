import { useEffect, useState } from 'react';
import { Leaf, Shield, Heart, CheckCircle, Zap, Award, Droplet } from 'lucide-react';
import Footer from '../components/Footer';

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
            Committed to delivering exceptional cleaning services with reliability, professional standards, and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
                Professional cleaning company based in Edinburgh, dedicated to delivering high-quality residential and commercial cleaning services with integrity and excellence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fully insured and certified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Customer-focused approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Eco-friendly methods</span>
                </li>
              </ul>
            </div>

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
                Every task performed with meticulous attention to detail and respect for your space. Clean environment contributes to health and peace of mind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Professional staff</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Consistent service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Transparent pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Deliver reliable and professional cleaning services that create healthy environments for customers across Scotland.
              </p>
            </div>

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
                Become Scotland's most trusted cleaning brand, setting standards in cleanliness and exceptional customer care.
              </p>
            </div>

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
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-white/90">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span> Quality Excellence
                </li>
                <li className="flex items-center text-white/90">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span> Honesty & Integrity
                </li>
                <li className="flex items-center text-white/90">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span> Customer Focus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

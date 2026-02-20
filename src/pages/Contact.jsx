import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

// Initialize EmailJS - Replace with your actual Public Key from EmailJS
const EMAILJS_PUBLIC_KEY = 'q6AlmW8UNfBiLaHXm';
const EMAILJS_SERVICE_ID = 'service_ohpcbkf';
const EMAILJS_CONTACT_TEMPLATE_ID = 'template_xa949yt';

// Initialize emailjs on first load
emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [visibleElements, setVisibleElements] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Prepare email template variables
      const templateParams = {
        to_email: formData.email,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone || 'Not provided',
        customer_message: `Service: ${formData.service || 'General inquiry'}\n\n${formData.message}`,
      };

      // Send email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSuccessMessage('✅ Message sent! We will contact you within 24 hours at ' + formData.phone);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setErrorMessage('Error sending message. Please call us at +44 7440 620492.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            id="contact-title"
            data-animate="true"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['contact-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['contact-title'] ? 1 : 0,
            }}
          >
            Get in Touch
          </h1>
          <p
            id="contact-subtitle"
            data-animate="true"
            className="text-lg text-slate-600 max-w-3xl mx-auto transition-all duration-1000"
            style={{
              transform: visibleElements['contact-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['contact-subtitle'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div
            id="form-section"
            data-animate="true"
            className="transition-all duration-1000"
            style={{
              transform: visibleElements['form-section'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['form-section'] ? 1 : 0,
            }}
          >
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Send us a Message</h2>

            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-start gap-3 animate-fade-in">
                <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">{successMessage}</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-start gap-3 animate-fade-in">
                <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">{errorMessage}</p>
                  <p className="text-sm text-red-700 mt-1">Call us at <strong>+44 7440 620492</strong> to contact us directly</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 7440 620492"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white cursor-pointer"
                >
                  <option value="">-- Select a Service --</option>
                  <option value="regular-domestic-cleaning">Regular Domestic Cleaning</option>
                  <option value="one-off-deep-cleaning">One-Off Deep Cleaning</option>
                  <option value="end-of-tenancy-cleaning">End of Tenancy Cleaning</option>
                  <option value="office-cleaning">Office Cleaning</option>
                  <option value="window-cleaning">Window Cleaning</option>
                  <option value="carpet-upholstery-cleaning">Carpet & Upholstery Cleaning</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your cleaning needs..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading || !formData.name || !formData.email || !formData.message}
                className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            id="info-section"
            data-animate="true"
            className="transition-all duration-1000"
            style={{
              transform: visibleElements['info-section'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['info-section'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">Contact Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <a href="tel:+447440620492" className="p-4 md:p-6 bg-slate-50 rounded-lg hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300">
                <div className="flex gap-3 md:gap-4">
                  <Phone className="w-5 md:w-6 h-5 md:h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 mb-1 text-base md:text-lg">Phone</h3>
                    <p className="text-sm md:text-base text-slate-600 break-all">+44 7440 620492</p>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">Available 24/7</p>
                  </div>
                </div>
              </a>

              <a href="mailto:thistleprimecleaning@gmail.com" className="p-4 md:p-6 bg-slate-50 rounded-lg hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300">
                <div className="flex gap-3 md:gap-4">
                  <Mail className="w-5 md:w-6 h-5 md:h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 mb-1 text-base md:text-lg">Email</h3>
                    <p className="text-sm md:text-base text-slate-600 break-all">thistleprimecleaning@gmail.com</p>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">Response within 1 hour</p>
                  </div>
                </div>
              </a>

              <a href="https://maps.google.com/?q=17-2+Murdoch+Terrace,+Edinburgh+EH11+1BD" target="_blank" rel="noopener noreferrer" className="p-4 md:p-6 bg-slate-50 rounded-lg hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300 md:col-span-2">
                <div className="flex gap-3 md:gap-4">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 mb-1 text-base md:text-lg">Address</h3>
                    <p className="text-sm md:text-base text-slate-600">17-2 Murdoch Terrace</p>
                    <p className="text-sm md:text-base text-slate-600">Edinburgh EH11 1BD</p>
                  </div>
                </div>
              </a>

              <div className="p-4 md:p-6 bg-teal-50 rounded-lg border border-teal-200 md:col-span-2">
                <div className="flex gap-3 md:gap-4">
                  <Clock className="w-5 md:w-6 h-5 md:h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 md:mb-3 text-base md:text-lg">Business Hours</h3>
                    <p className="text-sm md:text-base text-slate-600">Monday - Sunday: Open 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">We look forward to hearing from you and helping with your cleaning needs.</p>
        </div>
      </section>

      <footer className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-400 text-center w-full overflow-x-hidden">
        <p>&copy; 2024-2026 Thistle Prime Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;

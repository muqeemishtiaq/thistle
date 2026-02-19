import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:thistleprimecleaning@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        id="info-section"
        data-animate
        className={`py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden transition-all duration-700 ${
          visibleSections['info-section']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <a
              href="tel:+447440620492"
              className="p-8 bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-teal-100 hover:border-teal-400"
            >
              <Phone className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 mb-4">Call us anytime for quick assistance</p>
              <p className="text-teal-600 font-semibold text-lg">+44 7440 620492</p>
              <p className="text-slate-500 text-sm mt-2">Mon-Sun, 8am-9pm</p>
            </a>

            {/* Email Card */}
            <a
              href="mailto:thistleprimecleaning@gmail.com"
              className="p-8 bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-teal-100 hover:border-teal-400"
            >
              <Mail className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 mb-4">Send us your questions or booking requests</p>
              <p className="text-teal-600 font-semibold break-all">thistleprimecleaning@gmail.com</p>
              <p className="text-slate-500 text-sm mt-2">Responds within 1 hour</p>
            </a>

            {/* Location Card */}
            <div className="p-8 bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl shadow-lg border border-teal-100">
              <MapPin className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Service Area</h3>
              <p className="text-slate-600 mb-4">We serve Edinburgh and surrounding areas</p>
              <p className="text-teal-600 font-semibold">Edinburgh, Scotland</p>
              <p className="text-slate-500 text-sm mt-2">Flexible scheduling available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="form-section"
        data-animate
        className={`py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 w-full overflow-x-hidden transition-all duration-700 ${
          visibleSections['form-section']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-slate-900">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                placeholder="+44 123 456 7890"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200 resize-none"
                placeholder="Tell us about your cleaning needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

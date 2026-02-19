import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Phone, Mail, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const OrderPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [formData, setFormData] = useState({
    serviceType: 'residential-cleaning',
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    frequency: 'once',
    notes: '',
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
    const mailtoLink = `mailto:thistleprimecleaning@gmail.com?subject=New Booking Request from ${encodeURIComponent(formData.name)}&body=Booking Details:%0A%0AService Type: ${encodeURIComponent(formData.serviceType)}%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0AAddress: ${encodeURIComponent(formData.address)}%0APreferred Date: ${encodeURIComponent(formData.date)}%0APreferred Time: ${encodeURIComponent(formData.time)}%0AFrequency: ${encodeURIComponent(formData.frequency)}%0A%0ANotes:%0A${encodeURIComponent(formData.notes)}`;
    window.location.href = mailtoLink;
  };

  const serviceOptions = [
    { value: 'residential-cleaning', label: 'Residential Cleaning' },
    { value: 'commercial-cleaning', label: 'Commercial Cleaning' },
    { value: 'specialized-cleaning', label: 'Specialized Cleaning' },
  ];

  const frequencyOptions = [
    { value: 'once', label: 'One-time Cleaning' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi-weekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900">
            Book Your Cleaning
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Schedule your professional cleaning service in just a few minutes
          </p>
        </div>
      </section>

      {/* Info Cards */}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl border border-teal-100 text-center">
              <Calendar className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Flexible Dates</h3>
              <p className="text-sm text-slate-600">Pick any date that works for you</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl border border-teal-100 text-center">
              <Clock className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Flexible Times</h3>
              <p className="text-sm text-slate-600">Choose your preferred time slot</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl border border-teal-100 text-center">
              <MapPin className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Local Service</h3>
              <p className="text-sm text-slate-600">We serve Edinburgh & surrounding areas</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl border border-teal-100 text-center">
              <Users className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Professional Team</h3>
              <p className="text-sm text-slate-600">Experienced and fully vetted staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section
        id="form-section"
        data-animate
        className={`py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 w-full overflow-x-hidden transition-all duration-700 ${
          visibleSections['form-section']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-slate-900">
            Booking Details
          </h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            {/* Service Type */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Service Type *
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                  placeholder="+44 123 456 7890"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-slate-900 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                  placeholder="123 Main Street, Edinburgh"
                />
              </div>
            </div>

            {/* Scheduling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-slate-900 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-slate-900 mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
                />
              </div>
            </div>

            {/* Frequency */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Cleaning Frequency *
              </label>
              <select
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              >
                {frequencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div className="mb-8">
              <label htmlFor="notes" className="block text-sm font-semibold text-slate-900 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200 resize-none"
                placeholder="Tell us anything special about your cleaning needs..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle size={20} />
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderPage;

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const FORMSPREE_ID = 'xnjbzely';

const OrderSimple = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '', // Updated to single string "HH:mm"
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const services = [
    { id: 'regular-domestic-cleaning', name: 'Regular Domestic Cleaning', price: '£15–£28/hr' },
    { id: 'one-off-deep-cleaning', name: 'One-Off Deep Cleaning', price: '£90–£180' },
    { id: 'end-of-tenancy-cleaning', name: 'End of Tenancy Cleaning', price: '£120–£430+' },
    { id: 'office-cleaning', name: 'Office Cleaning', price: '£16–£35+/hr' },
    { id: 'window-cleaning', name: 'Window Cleaning', price: 'Varies' },
    { id: 'carpet-upholstery-cleaning', name: 'Carpet & Upholstery Cleaning', price: 'Varies' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.service || !formData.date || !formData.time || !formData.name || !formData.email || !formData.phone || !formData.address) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const selectedService = services.find(s => s.id === formData.service);
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Service: selectedService?.name || 'Service',
          Date: new Date(formData.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }),
          Time: formData.time, // Sending the 24h string
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Address: formData.address,
        }),
      });

      if (response.ok) {
        setSuccessMessage(`✅ Booking submitted successfully! We will contact you within 1 hour at ${formData.phone} to confirm.`);
        setTimeout(() => {
          setFormData({
            service: '',
            date: '',
            time: '',
            name: '',
            email: '',
            phone: '',
            address: '',
          });
          setSuccessMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to submit booking.');
      }
    } catch (error) {
      setErrorMessage('Error submitting booking. Call us at +44 7440 620492.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Book Your Cleaning</h1>
          <p className="text-lg text-slate-600">Professional cleaning services for your home</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100">
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-start gap-3">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
              <p className="font-semibold text-green-900">{successMessage}</p>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl flex items-start gap-3">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-semibold text-red-900">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700">
                Service <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:outline-none bg-white text-slate-900 transition-all cursor-pointer"
              >
                <option value="">Select a service</option>
                {services.map(s => (
                  <option key={s.id} value={s.id}>{s.name} ({s.price})</option>
                ))}
              </select>
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Calendar size={18} className="text-teal-600" />
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={getTodayDate()}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-teal-500 transition-all"
                />
              </div>

              {/* Time */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Clock size={18} className="text-teal-600" />
                  Time <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none cursor-pointer px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-medium focus:outline-none focus:border-teal-500 transition-all"
                  >
                    <option value="">Select Time</option>
                    {[...Array(24)].map((_, hour) => (
                      [0, 30].map((minute) => {
                        const h = hour.toString().padStart(2, '0');
                        const m = minute.toString().padStart(2, '0');
                        const timeStr = `${h}:${m}`;
                        return <option key={timeStr} value={timeStr}>{timeStr}</option>;
                      })
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 group-focus-within:text-teal-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:outline-none bg-white transition-all"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:outline-none bg-white transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 7440 620492"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:outline-none bg-white transition-all"
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <MapPin size={18} className="text-teal-600" />
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street, London"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:outline-none bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 active:scale-[0.98] disabled:bg-slate-300 disabled:cursor-not-allowed transition-all text-lg shadow-lg shadow-teal-600/20"
            >
              {loading ? 'Submitting...' : 'Confirm Booking'}
            </button>
          </form>

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center text-sm text-slate-500">
            <p className="font-bold text-slate-700 mb-1">Need help?</p>
            <p>Call: <a href="tel:+447440620492" className="text-teal-600 font-bold hover:underline">+44 7440 620492</a></p>
            <p>Email: <a href="mailto:thistleprimecleaning@gmail.com" className="text-teal-600 font-bold hover:underline">thistleprimecleaning@gmail.com</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white text-center">
        <p className="text-slate-400 text-sm">&copy; 2026 Thistle Prime Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OrderSimple;
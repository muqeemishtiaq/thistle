import React, { useState } from 'react';
import { Calendar, Clock, MapPin, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const FORMSPREE_ID = 'xnjbzely';

const OrderSimple = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    hour: '',
    minute: '',
    ampm: '',
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
    
    // Validate
    if (!formData.service || !formData.date || !formData.hour || !formData.minute || !formData.ampm || !formData.name || !formData.email || !formData.phone || !formData.address) {
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Service: selectedService?.name || 'Service',
          Date: new Date(formData.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }),
          Time: `${formData.hour}:${formData.minute} ${formData.ampm}`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Address: formData.address,
        }),
      });

      console.log('Formspree Response Status:', response.status);

      if (response.ok) {
        setSuccessMessage('✅ Booking submitted successfully! We will contact you within 1 hour at ' + formData.phone + ' to confirm.');
        
        setTimeout(() => {
          setFormData({
            service: '',
            date: '',
            hour: '',
            minute: '',
            ampm: '',
            name: '',
            email: '',
            phone: '',
            address: '',
          });
          setSuccessMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to submit booking. Status: ' + response.status);
      }
    } catch (error) {
      console.error('Full Error:', error);
      console.error('Error message:', error.message);
      setErrorMessage('Error submitting booking. Call us at +44 7440 620492.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Book Your Cleaning</h1>
          <p className="text-lg text-slate-600">Professional cleaning services for your home</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-start gap-3">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
              <p className="font-semibold text-green-900">{successMessage}</p>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-start gap-3">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-semibold text-red-900">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Service <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none bg-white text-slate-900"
              >
                <option value="">Select a service</option>
                {services.map(s => (
                  <option key={s.id} value={s.id}>{s.name} - {s.price}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Calendar size={16} className="text-teal-600" />
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={getTodayDate()}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Clock size={16} className="text-teal-600" />
                  Time <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    name="hour"
                    value={formData.hour}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none bg-white"
                  >
                    <option value="">Hour</option>
                    {[...Array(12)].map((_, i) => {
                      const hour = (i + 1).toString().padStart(2, '0');
                      return <option key={hour} value={hour}>{hour}</option>;
                    })}
                  </select>

                  <select
                    name="minute"
                    value={formData.minute}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none bg-white"
                  >
                    <option value="">Mins</option>
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>

                  <select
                    name="ampm"
                    value={formData.ampm}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none bg-white"
                  >
                    <option value="">AM/PM</option>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 7440 620492"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <MapPin size={16} className="text-teal-600" />
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street, London"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all text-lg"
            >
              {loading ? 'Submitting...' : '✓ Submit Booking'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200 text-center text-sm text-slate-600">
            <p className="mb-2"><strong>Questions?</strong></p>
            <p>Call us: <a href="tel:+447440620492" className="text-teal-600 font-semibold">+44 7440 620492</a></p>
            <p>Email: <a href="mailto:thistleprimecleaning@gmail.com" className="text-teal-600 font-semibold">thistleprimecleaning@gmail.com</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white text-center">
        <p className="text-slate-300">&copy; 2026 Thistle Prime Cleaning. All rights reserved.</p>
      </section>
    </div>
  );
};

export default OrderSimple;

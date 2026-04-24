import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Clock, MapPin, Users, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const EMAILJS_PUBLIC_KEY = 'q6AlmW8UNfBiLaHXm';
const EMAILJS_SERVICE_ID = 'service_ohpcbkf';
const EMAILJS_BOOKING_TEMPLATE_ID = 'template_xa949yt';

const Order = () => {
  const initialized = useRef(false);

  const [step, setStep] = useState(1);
  const [visibleElements, setVisibleElements] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    specialRequests: '',
  });

  // EmailJS init (ONLY ONCE)
  useEffect(() => {
    if (!initialized.current) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      initialized.current = true;
    }
  }, []);

  // scroll on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  // animation observer
  useEffect(() => {
  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleElements((prev) => ({
          ...prev,
          [entry.target.id]: true,
        }));
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }
);

  const elements = document.querySelectorAll('[data-animate]');

  elements.forEach((el) => {
    if (!el.id) el.id = `animate-${Math.random().toString(36).slice(2, 9)}`;
    observer.observe(el);
  });

  return () => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
}, []);

  const services = [
    { id: 'regular-domestic-cleaning', name: 'Regular Domestic Cleaning', price: '£15–£28/hr' },
    { id: 'one-off-deep-cleaning', name: 'One-Off Deep Cleaning', price: '£90–£180' },
    { id: 'end-of-tenancy-cleaning', name: 'End of Tenancy Cleaning', price: '£120–£430+' },
    { id: 'office-cleaning', name: 'Office Cleaning', price: '£16–£35+/hr' },
    { id: 'window-cleaning', name: 'Window Cleaning', price: 'Varies' },
    { id: 'carpet-upholstery-cleaning', name: 'Carpet & Upholstery Cleaning', price: 'Varies' },
  ];
  const getServiceValue = (serviceId) => {
    switch (serviceId) {
      case 'one-off-deep-cleaning': return 120;
      case 'end-of-tenancy-cleaning': return 200;
      case 'office-cleaning': return 150;
      default: return 100;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 2 && (!formData.date || !formData.time || !formData.propertyType)) {
  setErrorMessage('Please complete schedule details.');
  return;
}
if (step === 3 && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
  setErrorMessage('Please enter a valid phone number.');
  return;
}
    if (step < 3) {
      setStep(prev => prev + 1);    
    } else if (step === 3) {

      // Validate form data
      if (!formData.service || !formData.date || !formData.time || !formData.name || !formData.email || !formData.phone || !formData.address) {
        setErrorMessage('Please fill in all required fields.');
        return;
      }

      setLoading(true);
      setErrorMessage('');
      setSuccessMessage('');

      try {
        const selectedService = services.find(s => s.id === formData.service);

      const transactionId = `THISTLE-${Date.now()}`;

const templateParams = {
  to_email: formData.email,
  admin_email: 'thistleprimecleaning@gmail.com',
  customer_name: formData.name,
  customer_email: formData.email,
  customer_phone: formData.phone,
  service_name: selectedService?.name || 'Not selected',
  booking_date: new Date(formData.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  booking_time: formData.time,
  property_type: formData.propertyType,
  bedrooms: formData.bedrooms,
  bathrooms: formData.bathrooms,
  address: formData.address,
  special_requests: formData.specialRequests || 'None',
  booking_reference: transactionId,
};

// Send email
await emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_BOOKING_TEMPLATE_ID,
  templateParams,
  EMAILJS_PUBLIC_KEY
);

// Google Ads Conversion
if (window.gtag) {
  window.gtag('event', 'conversion', {
    send_to: 'AW-18080192718/tqJOCInurpwcEM6xp61D',
    value: getServiceValue(formData.service),
    currency: 'GBP',
    transaction_id: transactionId
  });
}
setSuccessMessage(`✅ Booking confirmed! Ref: ${transactionId}`);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            service: '',
            date: '',
            time: '',
            propertyType: '',
            bedrooms: '',
            bathrooms: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            specialRequests: '',
          });
          setStep(1);
          setSuccessMessage('');
        }, 3000);
      } catch (error) {
        console.error('Email send failed:', error);
        setErrorMessage('Error submitting booking. Please try again or call us at +44 7440 620492.');
      } finally {
        setLoading(false);
      }
    }
  };

const handleChange = (e) => {
  if (loading) return;

  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  // clear old error first
  setErrorMessage("");

  // phone validation
  
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getSelectedService = () => {
    return services.find(s => s.id === formData.service);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            id="order-title"
            data-animate="true"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['order-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['order-title'] ? 1 : 0,
            }}
          >
            Book Your Cleaning
          </h1>
          <p
            id="order-subtitle"
            data-animate="true"
            className="text-lg text-slate-600 max-w-3xl mx-auto transition-all duration-1000"
            style={{
              transform: visibleElements['order-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['order-subtitle'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            Professional cleaning services tailored to your needs
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${stepNum <= step
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                    }`}
                >
                  {stepNum < step ? <CheckCircle size={24} /> : stepNum}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-slate-900">
                    {stepNum === 1 ? 'Service' : stepNum === 2 ? 'Schedule' : 'Details'}
                  </p>
                </div>
                {stepNum < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-all duration-300 ${stepNum < step ? 'bg-teal-600' : 'bg-slate-200'
                      }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          {successMessage && (
            <div className="mb-8 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-start gap-3 animate-fade-in">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-900">{successMessage}</p>
                <p className="text-sm text-green-700 mt-1">Redirecting you back to the beginning...</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-8 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-start gap-3 animate-fade-in">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900">{errorMessage}</p>
                <p className="text-sm text-red-700 mt-1">Call us at <strong>+44 7440 620492</strong> to complete your booking</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div
                id="step1-section"
                data-animate="true"
                className="transition-all duration-500"
                style={{
                  transform: 'translateY(0)',
                  opacity: 1,
                }}
              >
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Select Your Service</h2>
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-red-500">*</span>Choose a Cleaning Service
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <label key={service.id} className="flex items-center p-4 border-2 border-slate-300 rounded-lg cursor-pointer hover:bg-teal-50 hover:border-teal-400 transition-all duration-200" style={{ borderColor: formData.service === service.id ? '#14b8a6' : '#cbd5e1', backgroundColor: formData.service === service.id ? '#f0fdfa' : 'transparent' }}>
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={formData.service === service.id}
                          onChange={handleChange}
                          className="w-4 h-4 text-teal-600 cursor-pointer"
                        />
                        <div className="ml-3 flex-1">
                          <p className="font-semibold text-slate-900">{service.name}</p>
                          <p className="text-sm text-slate-600">{service.price}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!formData.service || loading}
                  className="w-full px-6 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    'Continue to Schedule →'
                  )}
                </button>
              </div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <div
                id="step2-section"
                data-animate="true"
                className="transition-all duration-500"
                style={{
                  transform: 'translateY(0)',
                  opacity: 1,
                }}
              >
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Schedule Your Cleaning</h2>

                {/* Selected Service Info */}
                <div className="p-4 bg-teal-50 border border-teal-300 rounded-lg mb-8">
                  <p className="text-sm text-slate-600">Selected Service</p>
                  <p className="font-bold text-slate-900">{getSelectedService()?.name}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Calendar size={18} className="text-teal-600" />
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getTodayDate()}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Clock size={18} className="text-teal-600" />
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900 font-medium"
                    >
                      <option value="">Select a time slot</option>
                      <option value="08:00-10:00">08:00 - 10:00</option>
                      <option value="10:00-12:00">10:00 - 12:00</option>
                      <option value="12:00-14:00">12:00 - 14:00</option>
                      <option value="14:00-16:00">14:00 - 16:00</option>
                      <option value="16:00-18:00">16:00 - 18:00</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Users size={18} className="text-teal-600" />
                      Property Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900 font-medium"
                    >
                      <option value="">Select property type</option>
                      <option value="flat">🏢 Flat / Apartment</option>
                      <option value="house">🏠 House</option>
                      <option value="bungalow">🏡 Bungalow</option>
                      <option value="office">💼 Office</option>
                      <option value="commercial">🏢 Commercial</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Bedrooms</label>
                      <input
                        type="number"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        min="0"
                        placeholder="0"
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Bathrooms</label>
                      <input
                        type="number"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                        min="0"
                        placeholder="0"
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900 font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-10">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    disabled={loading}
                    className="flex-1 px-6 py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 disabled:bg-slate-100 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.date || !formData.time || !formData.propertyType || loading}
                    className="flex-1 px-6 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      'Continue to Details →'
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <div
                id="step3-section"
                data-animate="true"
                className="transition-all duration-500"
                style={{
                  transform: 'translateY(0)',
                  opacity: 1,
                }}
              >
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Your Details</h2>

                {/* Booking Summary */}
                <div className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-lg mb-8 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircle size={20} className="text-teal-600" />
                    Booking Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Service</p>
                      <p className="text-base font-semibold text-slate-900">{getSelectedService()?.name || 'Not selected'}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Date</p>
                      <p className="text-base font-semibold text-slate-900">{new Date(formData.date).toLocaleDateString('en-GB', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Time</p>
                      <p className="text-base font-semibold text-slate-900">{formData.time}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Property Type</p>
                      <p className="text-base font-semibold text-slate-900 capitalize">{formData.propertyType}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Bedrooms/Bathrooms</p>
                      <p className="text-base font-semibold text-slate-900">{formData.bedrooms || '0'} bd / {formData.bathrooms || '0'} ba</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
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
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7440 620492"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <MapPin size={18} className="text-teal-600" />
                      Property Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main Street, London, UK"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <FileText size={18} className="text-teal-600" />
                      Special Requests or Notes
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Tell us about any special requests, allergies, or areas that need special attention..."
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex gap-4 mt-10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={loading}
                    className="flex-1 px-6 py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 disabled:bg-slate-100 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.phone || !formData.address || loading}
                    className="flex-1 px-6 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      '✓ Complete Booking'
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">Questions? Contact us at +44 7440 620492 or thistleprimecleaning@gmail.com</p>
        </div>
      </section>

      <footer className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-400 text-center w-full overflow-x-hidden">
        <p>&copy; 2024-2026 Thistle Prime Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
};
};
export default Order;

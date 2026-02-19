import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Users, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const Order = () => {
  const [visibleElements, setVisibleElements] = useState({});
  const [step, setStep] = useState(1);
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
    { id: 'regular-domestic-cleaning', name: 'Regular Domestic Cleaning', price: '£15–£28/hr' },
    { id: 'one-off-deep-cleaning', name: 'One-Off Deep Cleaning', price: '£90–£180' },
    { id: 'end-of-tenancy-cleaning', name: 'End of Tenancy Cleaning', price: '£120–£430+' },
    { id: 'office-cleaning', name: 'Office Cleaning', price: '£16–£35+/hr' },
    { id: 'window-cleaning', name: 'Window Cleaning', price: 'Varies' },
    { id: 'carpet-upholstery-cleaning', name: 'Carpet & Upholstery Cleaning', price: 'Varies' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      // Submit the form
      setLoading(true);
      setErrorMessage('');
      setSuccessMessage('');

      try {
        const selectedService = services.find(s => s.id === formData.service);
        
        // Prepare email content
        const emailContent = `
New Booking Request from Thistle Prime Cleaning Website

CUSTOMER DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

BOOKING DETAILS:
Service: ${selectedService?.name || 'Not selected'}
Date: ${new Date(formData.date).toLocaleDateString()}
Time: ${formData.time}
Property Type: ${formData.propertyType}
Bedrooms: ${formData.bedrooms}
Bathrooms: ${formData.bathrooms}

SPECIAL REQUESTS:
${formData.specialRequests || 'None'}

---
Please reply to: ${formData.email}
Phone: ${formData.phone}
`;

        // Send email via Formspree (free service)
        const response = await fetch('https://formspree.io/f/xnjbzely', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: selectedService?.name,
            date: formData.date,
            time: formData.time,
            propertyType: formData.propertyType,
            bedrooms: formData.bedrooms,
            bathrooms: formData.bathrooms,
            address: formData.address,
            specialRequests: formData.specialRequests,
            message: emailContent,
            _redirect: false,
          }),
        });

        if (response.ok) {
          setSuccessMessage('✅ Booking submitted successfully! We will contact you shortly.');
          // Reset form after 2 seconds
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
          }, 2000);
        } else {
          setErrorMessage('Failed to submit booking. Please try again or call us directly.');
        }
      } catch (error) {
        setErrorMessage('Error submitting booking. Please call us at +44 7440 620492 to complete your booking.');
      } finally {
        setLoading(false);
      }
    }
  };

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
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    stepNum <= step
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
                    className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                      stepNum < step ? 'bg-teal-600' : 'bg-slate-200'
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
                className="transition-all duration-1000"
                style={{
                  transform: visibleElements['step1-section'] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements['step1-section'] ? 1 : 0,
                }}
              >
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Select Your Service</h2>
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Choose a Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    size={7}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900 font-medium cursor-pointer"
                  >
                    <option value="">-- Select a Service --</option>
                    <option value="regular-domestic-cleaning">Regular Domestic Cleaning - £15–£28/hr</option>
                    <option value="one-off-deep-cleaning">One-Off Deep Cleaning - £90–£180</option>
                    <option value="end-of-tenancy-cleaning">End of Tenancy Cleaning - £120–£430+</option>
                    <option value="office-cleaning">Office Cleaning - £16–£35+/hr</option>
                    <option value="window-cleaning">Window Cleaning - Varies</option>
                    <option value="carpet-upholstery-cleaning">Carpet & Upholstery Cleaning - Varies</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={!formData.service || loading}
                  className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    'Continue to Schedule'
                  )}
                </button>
              </div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <div
                id="step2-section"
                data-animate="true"
                className="transition-all duration-1000"
                style={{
                  transform: visibleElements['step2-section'] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements['step2-section'] ? 1 : 0,
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
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getTodayDate()}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Clock size={18} className="text-teal-600" />
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a time</option>
                      <option value="08:00-10:00">8:00am - 10:00am</option>
                      <option value="10:00-12:00">10:00am - 12:00pm</option>
                      <option value="12:00-14:00">12:00pm - 2:00pm</option>
                      <option value="14:00-16:00">2:00pm - 4:00pm</option>
                      <option value="16:00-18:00">4:00pm - 6:00pm</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Users size={18} className="text-teal-600" />
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select property type</option>
                      <option value="flat">Flat</option>
                      <option value="house">House</option>
                      <option value="bungalow">Bungalow</option>
                      <option value="office">Office</option>
                      <option value="commercial">Commercial</option>
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
                        placeholder="e.g., 2"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors"
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
                        placeholder="e.g., 1"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    disabled={loading}
                    className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 disabled:bg-slate-100 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.date || !formData.time || !formData.propertyType || loading}
                    className="flex-1 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      'Continue to Details'
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
                className="transition-all duration-1000"
                style={{
                  transform: visibleElements['step3-section'] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements['step3-section'] ? 1 : 0,
                }}
              >
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Your Details</h2>

                {/* Booking Summary */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg mb-8">
                  <h3 className="font-bold text-slate-900 mb-4">Booking Summary</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Service Type</p>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        size={7}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors bg-white text-slate-900 font-medium cursor-pointer text-sm"
                      >
                        <option value="">-- Select a Service --</option>
                        <option value="regular-domestic-cleaning">Regular Domestic Cleaning - £15–£28/hr</option>
                        <option value="one-off-deep-cleaning">One-Off Deep Cleaning - £90–£180</option>
                        <option value="end-of-tenancy-cleaning">End of Tenancy Cleaning - £120–£430+</option>
                        <option value="office-cleaning">Office Cleaning - £16–£35+/hr</option>
                        <option value="window-cleaning">Window Cleaning - Varies</option>
                        <option value="carpet-upholstery-cleaning">Carpet & Upholstery Cleaning - Varies</option>
                      </select>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Date</p>
                      <p className="text-sm text-slate-900 font-medium">{new Date(formData.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Time</p>
                      <p className="text-sm text-slate-900 font-medium">{formData.time}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Property</p>
                      <p className="text-sm text-slate-900 font-medium">{formData.propertyType} ({formData.bedrooms} bed, {formData.bathrooms} bath)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
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
                    <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <MapPin size={18} className="text-teal-600" />
                      Property Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your property address"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <FileText size={18} className="text-teal-600" />
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Any special requests or areas of concern..."
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={loading}
                    className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 disabled:bg-slate-100 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.phone || !formData.address || loading}
                    className="flex-1 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Booking...
                      </>
                    ) : (
                      'Complete Booking'
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

export default Order;

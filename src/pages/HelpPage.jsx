import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, MessageSquare } from 'lucide-react';
import Footer from '../components/Footer';

const HelpPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

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

  const faqs = [
    {
      question: 'How often should I get my home cleaned?',
      answer:
        'Most homes benefit from weekly or bi-weekly cleaning. The frequency depends on your lifestyle, number of occupants, and pets. We can recommend a schedule during your free consultation.',
    },
    {
      question: 'Are your cleaning products safe for families and pets?',
      answer:
        'Yes! We use eco-friendly, non-toxic cleaning products that are safe for children and pets. We can discuss specific product preferences during booking.',
    },
    {
      question: 'Do you offer emergency or same-day cleaning?',
      answer:
        'We try our best to accommodate same-day or emergency requests based on availability. Please call us directly at +447440620492 to check availability.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We provide cleaning services throughout Edinburgh and surrounding areas. Contact us to confirm if we service your location.',
    },
    {
      question: 'Do you require a long-term contract?',
      answer:
        'No long-term contracts required. You can book cleaning services on a flexible schedule. Cancel or adjust anytime with notice.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Cancellations made 48 hours in advance receive a full refund. Cancellations within 48 hours may incur a service fee.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900">
            Help & Support
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Find answers to common questions and get in touch with our team
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq-section"
        data-animate
        className={`py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden transition-all duration-700 ${
          visibleSections['faq-section']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden hover:border-teal-400 transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 md:py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900 text-left">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-5 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section
        id="contact-section"
        data-animate
        className={`py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 w-full overflow-x-hidden transition-all duration-700 ${
          visibleSections['contact-section']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center text-slate-900">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <a
              href="tel:+447440620492"
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-100 hover:border-teal-400"
            >
              <Phone className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 mb-3">Call us for immediate assistance</p>
              <p className="text-teal-600 font-semibold text-lg">+44 7440 620492</p>
            </a>

            {/* Email */}
            <a
              href="mailto:thistleprimecleaning@gmail.com"
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-100 hover:border-teal-400"
            >
              <Mail className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 mb-3">Send us a message anytime</p>
              <p className="text-teal-600 font-semibold break-all">thistleprimecleaning@gmail.com</p>
            </a>

            {/* Live Chat */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-slate-100">
              <MessageSquare className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Response Time</h3>
              <p className="text-slate-600 mb-3">We typically respond within 1 hour</p>
              <p className="text-teal-600 font-semibold">Monday-Sunday: Open 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpPage;

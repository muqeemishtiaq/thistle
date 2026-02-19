import React, { useEffect, useState } from 'react';
import { Phone, Mail, MessageSquare, FileText, Clock, HelpCircle } from 'lucide-react';

const Help = () => {
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

  const faqItems = [
    {
      question: 'How do I book a service?',
      answer: 'You can book online through our website, call us at +44 7440 620492, or email us. We\'ll confirm your booking and discuss any specific requirements.'
    },
    {
      question: 'Do you offer same-day bookings?',
      answer: 'Yes! Subject to availability, we can arrange same-day or next-day appointments. Call us immediately for urgent requests.'
    },
    {
      question: 'What if I\'m not satisfied with the service?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll return at no extra cost to address your concerns.'
    },
    {
      question: 'Are your products eco-friendly?',
      answer: 'Yes, we use environmentally safe, professional-grade cleaning products that are effective and safe for your home and family.'
    },
    {
      question: 'Do you provide cleaning supplies?',
      answer: 'Yes, we bring all necessary equipment and supplies. You don\'t need to provide anything.'
    },
    {
      question: 'Can I customize my cleaning package?',
      answer: 'Absolutely! We can customize any service to meet your specific needs. Contact us to discuss your requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            id="help-title"
            data-animate="true"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['help-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['help-title'] ? 1 : 0,
            }}
          >
            Help & Support
          </h1>
          <p
            id="help-subtitle"
            data-animate="true"
            className="text-lg text-slate-600 max-w-3xl mx-auto transition-all duration-1000"
            style={{
              transform: visibleElements['help-subtitle'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['help-subtitle'] ? 1 : 0,
              transitionDelay: '100ms',
            }}
          >
            Find answers to common questions and get the support you need
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <h2
            id="faq-title"
            data-animate="true"
            className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['faq-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['faq-title'] ? 1 : 0,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                id={`faq-${idx}`}
                data-animate="true"
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-teal-300 transition-all duration-300"
                style={{
                  transform: visibleElements[`faq-${idx}`] ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleElements[`faq-${idx}`] ? 1 : 0,
                  transitionDelay: `${idx * 50}ms`,
                }}
              >
                <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-teal-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2
            id="contact-methods-title"
            data-animate="true"
            className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 transition-all duration-1000"
            style={{
              transform: visibleElements['contact-methods-title'] ? 'translateY(0)' : 'translateY(20px)',
              opacity: visibleElements['contact-methods-title'] ? 1 : 0,
            }}
          >
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Phone', content: '+44 7440 620492', href: 'tel:+447440620492' },
              { icon: Mail, title: 'Email', content: 'thistleprimecleaning@gmail.com', href: 'mailto:thistleprimecleaning@gmail.com' },
              { icon: MessageSquare, title: 'Response Time', content: 'Within 2 hours', href: null },
            ].map((method, idx) => {
              const Icon = method.icon;
              return (
                <a
                  key={idx}
                  href={method.href || '#'}
                  id={`method-${idx}`}
                  data-animate="true"
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-teal-200"
                  style={{
                    transform: visibleElements[`method-${idx}`] ? 'translateY(0)' : 'translateY(20px)',
                    opacity: visibleElements[`method-${idx}`] ? 1 : 0,
                    transitionDelay: `${idx * 100}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-slate-600 break-all">{method.content}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">We're here to help! Reach out anytime.</p>
        </div>
      </section>

      <footer className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-400 text-center w-full overflow-x-hidden">
        <p>&copy; 2024-2026 Thistle Prime Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Help;

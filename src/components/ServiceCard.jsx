import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-service-id="${service.id}"]`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [service.id]);

  const handleViewDetails = () => {
    navigate(`/services/${service.id}`);
  };

  return (
    <div
      data-service-id={service.id}
      className={`h-full p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-teal-300 overflow-hidden transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? '0ms' : '0ms' }}
    >
      {/* Icon Background */}
      <div className="mb-6 p-4 bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl w-fit">
        {service.icon}
      </div>

      {/* Service Name */}
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        {service.name}
      </h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed mb-6 text-sm min-h-[60px]">
        {service.description}
      </p>

      {/* Price Section */}
      <div className="mb-6 p-4 bg-teal-50 rounded-lg">
        <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">
          Typical Price
        </p>
        <p className="text-2xl font-bold text-teal-600">
          {service.price}
        </p>
      </div>

      {/* Features List */}
      {service.features && service.features.length > 0 && (
        <div className="mb-6 space-y-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-sm text-slate-600">{feature}</span>
            </div>
          ))}
        </div>
      )}

      {/* View Details Button */}
      <button
        onClick={handleViewDetails}
        className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        View Details
        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default ServiceCard;

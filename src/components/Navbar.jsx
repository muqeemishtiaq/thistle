import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ currentPage = 'home' }) {
  const navigate = useNavigate();
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const services = [
    { name: 'Regular Domestic Cleaning', path: '/services/regular-domestic-cleaning' },
    { name: 'One-Off Deep Cleaning', path: '/services/one-off-deep-cleaning' },
    { name: 'End of Tenancy Cleaning', path: '/services/end-of-tenancy-cleaning' },
    { name: 'Office Cleaning', path: '/services/office-cleaning' },
    { name: 'Window Cleaning', path: '/services/window-cleaning' },
    { name: 'Carpet & Upholstery Cleaning', path: '/services/carpet-upholstery-cleaning' },
  ];

  return (
    <>
      {/* Desktop Navbar - Fixed, No Y-Axis Movement */}
      <nav
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-sm"
        role="navigation"
        aria-label="Main navigation"
        style={{ perspective: 'none', WebkitPerspective: 'none' }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleNavigation('/')}
              className={`font-semibold text-base transition-colors duration-300 ${
                currentPage === 'home' ? 'text-teal-600' : 'text-slate-900 hover:text-teal-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className={`font-semibold text-base transition-colors duration-300 ${
                currentPage === 'about' ? 'text-teal-600' : 'text-slate-900 hover:text-teal-600'
              }`}
            >
              About
            </button>
            <div
              className="relative"
              onMouseEnter={() => setIsServiceHovered(true)}
              onMouseLeave={() => setIsServiceHovered(false)}
              style={{ perspective: 'none', WebkitPerspective: 'none' }}
            >
              <button
                className={`font-semibold text-base transition-colors duration-300 flex items-center gap-1.5 ${
                  currentPage === 'services' || currentPage === 'service-detail'
                    ? 'text-teal-600'
                    : 'text-slate-900 hover:text-teal-600'
                }`}
                aria-expanded={isServiceHovered}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  size={18}
                  style={{
                    transition: 'transform 300ms ease-in-out',
                    transform: isServiceHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              {/* Desktop Services Dropdown */}
              <div
                className={`absolute left-0 top-full mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ${
                  isServiceHovered ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
                role="menu"
              >
                <button
                  onClick={() => handleNavigation('/services')}
                  className="w-full text-left px-5 py-3 text-slate-900 font-semibold hover:bg-teal-50 hover:text-teal-600 transition-colors text-sm border-b border-gray-100"
                  role="menuitem"
                >
                  View All Services
                </button>
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(service.path)}
                    className="w-full text-left px-5 py-3 text-slate-900 font-semibold hover:bg-teal-50 hover:text-teal-600 transition-colors text-sm border-b border-gray-100 last:border-b-0"
                    role="menuitem"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-2xl font-bold text-slate-900">Thistle Prime</h1>
            <p className="text-xs tracking-widest font-semibold text-teal-600">CLEANING</p>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleNavigation('/help')}
              className={`font-semibold text-base transition-colors duration-300 ${
                currentPage === 'help' ? 'text-teal-600' : 'text-slate-900 hover:text-teal-600'
              }`}
            >
              Help
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className={`font-semibold text-base transition-colors duration-300 ${
                currentPage === 'contact' ? 'text-teal-600' : 'text-slate-900 hover:text-teal-600'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation('/order')}
              className="px-6 py-2.5 rounded-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              aria-label="Order Now"
            >
              Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Fixed, No Y-Axis Movement */}
      <nav
        className="md:hidden fixed top-0 left-0 right-0 z-40 h-16 bg-white shadow-sm"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="h-full px-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-slate-900">
            Thistle Prime
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-900 hover:text-teal-600 transition-colors duration-300"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className="fixed top-16 right-0 bottom-0 w-full sm:w-4/5 bg-white z-40 md:hidden overflow-y-auto overflow-x-hidden"
        style={{
          transform: isMobileMenuOpen ? 'translateX(0px)' : 'translateX(100%)',
          transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          backfaceVisibility: 'visible',
          WebkitBackfaceVisibility: 'visible',
        }}
        role="navigation"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Content */}
          <div className="flex-1 px-6 py-6">
            <nav className="space-y-2">
              <button
                onClick={() => handleNavigation('/')}
                className={`w-full text-left px-4 py-3 text-slate-900 font-semibold rounded transition-colors duration-300 ${
                  currentPage === 'home'
                    ? 'bg-teal-50 text-teal-600'
                    : 'hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavigation('/about')}
                className={`w-full text-left px-4 py-3 text-slate-900 font-semibold rounded transition-colors duration-300 ${
                  currentPage === 'about'
                    ? 'bg-teal-50 text-teal-600'
                    : 'hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                About
              </button>

              {/* Mobile Services Dropdown */}
              <div className="pt-2">
                <button
                  onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                  className={`w-full text-left px-4 py-3 text-slate-900 font-semibold rounded transition-colors duration-300 flex items-center justify-between ${
                    currentPage === 'services' || currentPage === 'service-detail'
                      ? 'bg-teal-50 text-teal-600'
                      : 'hover:bg-teal-50 hover:text-teal-600'
                  }`}
                  aria-expanded={isMobileServiceOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    size={20}
                    style={{
                      transition: 'transform 300ms ease-in-out',
                      transform: isMobileServiceOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                {isMobileServiceOpen && (
                  <div className="space-y-1 mt-2 ml-4 border-l-2 border-teal-200 pl-4">
                    <button
                      onClick={() => handleNavigation('/services')}
                      className="w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded transition-colors duration-300 text-sm font-semibold"
                    >
                      View All Services
                    </button>
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(service.path)}
                        className="w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded transition-colors duration-300 text-sm font-semibold"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation('/help')}
                className={`w-full text-left px-4 py-3 text-slate-900 font-semibold rounded transition-colors duration-300 ${
                  currentPage === 'help'
                    ? 'bg-teal-50 text-teal-600'
                    : 'hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                Help
              </button>

              <button
                onClick={() => handleNavigation('/contact')}
                className={`w-full text-left px-4 py-3 text-slate-900 font-semibold rounded transition-colors duration-300 ${
                  currentPage === 'contact'
                    ? 'bg-teal-50 text-teal-600'
                    : 'hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Sidebar Footer with Order Now Button */}
          <div className="px-6 py-6 border-t border-gray-200">
            <button
              onClick={() => handleNavigation('/order')}
              className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
              aria-label="Order Now"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Content Spacer - Desktop: 80px (h-20), Mobile: 64px (h-16) */}
      <div className="h-16 md:h-20" />
    </>
  );
}

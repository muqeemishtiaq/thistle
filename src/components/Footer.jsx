import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Contact Bar */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="tel:+447440620492" className="flex items-center justify-center md:justify-start gap-4 hover:text-teal-400 transition-colors group">
              <div className="p-3 bg-teal-600 rounded-lg group-hover:bg-teal-500 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-300">Call Us</p>
                <p className="font-semibold">+44 7440 620492</p>
              </div>
            </a>

            <a href="mailto:thistleprimecleaning@gmail.com" className="flex items-center justify-center md:justify-start gap-4 hover:text-teal-400 transition-colors group">
              <div className="p-3 bg-teal-600 rounded-lg group-hover:bg-teal-500 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-300">Email Us</p>
                <p className="font-semibold">thistleprimecleaning@gmail.com</p>
              </div>
            </a>

            <a href="https://maps.google.com/?q=17-2+Murdoch+Terrace,+Edinburgh+EH11+1BD" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-4 hover:text-teal-400 transition-colors group">
              <div className="p-3 bg-teal-600 rounded-lg group-hover:bg-teal-500 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-300">Address</p>
                <p className="font-semibold text-sm">17-2 Murdoch Terrace, Edinburgh EH11 1BD</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <footer className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-300 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Thistle Prime Cleaning</h3>
              <p className="text-sm text-slate-400 mb-2">Professional cleaning services across Scotland.</p>
              <p className="text-sm text-slate-400">Fully insured • Eco-friendly • Customer focused</p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-teal-400 transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
                <li><Link to="/help" className="hover:text-teal-400 transition-colors">Help</Link></li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/order" className="hover:text-teal-400 transition-colors">Order Now</Link></li>
                <li><a href="tel:+447440620492" className="hover:text-teal-400 transition-colors">Call Us</a></li>
                <li><a href="mailto:thistleprimecleaning@gmail.com" className="hover:text-teal-400 transition-colors">Email</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61586867490482" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-teal-600 transition-colors group">
                  <Facebook className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="https://www.instagram.com/thistleprimecleaning/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-teal-600 transition-colors group">
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="https://wa.me/+447440620492" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-teal-600 transition-colors group">
                  <MessageCircle className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>&copy; {currentYear} Thistle Prime Cleaning. All rights reserved.</p>
              <p>Based in Edinburgh, Scotland • Available across Scotland</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import Footer from '../components/Footer';

const ServiceDetailPage = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  const serviceDetails = {
    'regular-domestic-cleaning': {
      title: 'Regular Domestic Cleaning',
      subtitle: 'Professional routine home cleaning',
      description: 'Professional routine home cleaning including surfaces, kitchens, bathrooms, dusting, vacuuming, and mopping. Ideal for weekly or bi-weekly maintenance to keep your home fresh and hygienic.',
      price: '£15 – £28 per hour',
      pricingTiers: [
        { label: 'Hourly Rate', price: '£15 – £28/hr', description: 'Flexible hourly pricing based on property size and complexity' },
        { label: 'Weekly Visit', price: '£40 – £60', description: 'Regular 2–3 hour session for consistent cleanliness' },
        { label: 'Fortnightly Visit', price: '£70 – £100', description: 'Extended session for deeper weekly maintenance' },
        { label: 'Monthly Visit', price: '£100 – £150', description: 'Comprehensive monthly refresh for occasional deep cleaning' },
      ],
      features: [
        'Complete dust and surface cleaning throughout all rooms',
        'Bathroom scrubbing, disinfection, and polish',
        'Kitchen surfaces, appliances, and countertop cleaning',
        'Vacuuming carpets and mopping all hard floors',
        'Waste removal, bin liners replaced, and tidying',
        'Flexible scheduling: weekly, bi-weekly, or monthly options',
        'Premium eco-friendly cleaning products',
        'Professional equipment and supplies included',
      ],
      whatIncluded: [
        'Living area dusting, vacuuming, and tidying',
        'Kitchen surfaces, appliances, and sink cleaned',
        'Bathroom thorough scrub, mirrors polished, and disinfected',
        'Bedroom cleaning, dusting, and organization',
        'Hallways and entryways vacuumed and mopped',
        'All floors vacuumed or swept and mopped',
        'Waste disposed responsibly in provided bins',
        'Fresh, clean home ready for enjoyment',
        'Optional extras: oven cleaning, fridge interior, other deep tasks',
        'Professional consultation on cleaning frequency',
      ],
      why: [
        'Expert cleaning team with years of Edinburgh experience',
        'Quick, efficient service minimizing disruption to routine',
        'Premium eco-friendly products safe for families and pets',
        '100% customer satisfaction guarantee on every visit',
      ],
    },
    'one-off-deep-cleaning': {
      title: 'One-Off Deep Cleaning',
      subtitle: 'Comprehensive top-to-bottom refresh and sanitization',
      description: 'Comprehensive top-to-bottom cleaning service designed for seasonal refresh, post-event cleaning, move preparation, or detailed home sanitization. Perfect when your property needs a thorough, professional touch.',
      price: '£90 – £180',
      pricingTiers: [
        { label: 'Studio/1-Bed', price: '£90 – £120', description: 'Smaller properties (2–3 hours)' },
        { label: '2-Bed Property', price: '£130 – £160', description: 'Medium-sized homes (4–5 hours)' },
        { label: '3-Bed Property', price: '£160 – £200', description: 'Larger homes with more rooms (5–7 hours)' },
        { label: 'Full Sanitization', price: '+£30–£50', description: 'Add professional sanitization package' },
      ],
      features: [
        'High-reach areas, ceilings, and light fittings cleaned',
        'Deep appliance cleaning: oven, hob, microwave inside and out',
        'Baseboards, skirting boards, and wall marks removed',
        'Windows, mirrors, and glass cleaned to streak-free shine',
        'Under furniture and tight spaces thoroughly cleaned',
        'Complete carpet and upholstery vacuuming',
        'Multi-stage professional sanitization option',
        'Post-project inspection and photo documentation',
      ],
      whatIncluded: [
        'All high surfaces and ceiling cleaning with proper equipment',
        'Interior and exterior window pane polish',
        'Complete appliance deep clean (oven, hob, microwave, fridge)',
        'Baseboards and skirting board detailed scrubbing',
        'Furniture moved and spaces underneath cleaned',
        'Carpets and upholstery professionally vacuumed',
        'Bathroom grout and tile deep clean with sanitization',
        'Kitchen cupboards interior wiped (optional)',
        'Professional-grade disinfectant applied throughout',
        'Photo documentation of completed work',
      ],
      why: [
        'Expert team trained in deep cleaning methodologies',
        'Swift, efficient completion of large cleaning projects',
        'Premium professional-grade equipment and supplies used',
        'Post-service inspection ensures complete satisfaction',
      ],
    },
    'end-of-tenancy-cleaning': {
      title: 'End of Tenancy Cleaning',
      subtitle: 'Landlord-approved move-in/move-out service',
      description: 'Detailed move-in/move-out cleaning service meeting landlord and agency standards. We ensure your property inspection passes with flying colors and your deposit is fully protected.',
      price: '£120 – £430+',
      pricingTiers: [
        { label: 'Studio Flat', price: '£90 – £125', description: 'Smaller properties (2–3 hours)' },
        { label: '1-Bed Flat', price: '£120 – £155', description: 'Single bedroom flats (3–4 hours)' },
        { label: '2-Bed Flat', price: '£150 – £240', description: 'Two-bedroom properties (4–6 hours)' },
        { label: '3+ Bed House', price: '£270 – £430+', description: 'Larger family homes (6–8+ hours)' },
        { label: 'With Carpet Clean', price: '+£50–£100', description: 'Add professional carpet steam cleaning' },
      ],
      features: [
        'Landlord inspection-ready cleaning standards',
        'All walls wiped and marked spots removed',
        'Professional carpet and hard floor deep clean',
        'Complete appliance deep cleaning (oven, hob, microwave)',
        'Windows cleaned inside and out with frames',
        'Blinds dusted and curtain rails cleaned',
        'Full bathroom grout and tile sanitization',
        'Professional photo documentation included',
      ],
      whatIncluded: [
        'Complete wall and ceiling wipe-down, stain removal',
        'All carpets professionally vacuumed and steam-cleaned',
        'Hard floors stripped, cleaned, and polished',
        'Oven and hob professionally cleaned to spotless condition',
        'Refrigerator interior and exterior fully cleaned',
        'Microwave interior and exterior sanitized',
        'Bathroom grout, tiles, and fixtures scrubbed',
        'Windows cleaned inside, outside, and frames wiped',
        'Blinds dusted and curtain rails cleaned',
        'Skirting boards and baseboards sanitized and polished',
        'All cupboards and storage areas wiped',
        'Professional sanitization throughout property',
        'Property inspection photo documentation',
      ],
      why: [
        'Expert knowledge of landlord and agency requirements',
        'Proven track record passing property inspections',
        'Protected deposit with professional certification',
        'Full documentation and photos provided for records',
      ],
    },
    'office-cleaning': {
      title: 'Office Cleaning',
      subtitle: 'Professional commercial workplace cleaning',
      description: 'Professional commercial cleaning for offices and workplaces, ensuring a clean, hygienic, and productive environment. We maintain your business space to the highest standards.',
      price: '£16 – £35+ per hour',
      pricingTiers: [
        { label: 'Standard Office Clean', price: '£16 – £20/hr', description: 'Daily or regular office cleaning' },
        { label: 'Deep Office Clean', price: '£25 – £35+/hr', description: 'Detailed cleaning with additional tasks' },
        { label: 'Hourly After-Hours', price: '£18 – £28/hr', description: 'Evening or weekend cleaning' },
        { label: 'Contract Pricing', price: 'From £200/month', description: 'Customized monthly cleaning contracts' },
      ],
      features: [
        'Daily or weekly office cleaning plans available',
        'Desk and workspace thorough disinfection',
        'Kitchen and break room deep clean',
        'Meeting room and boardroom professional cleaning',
        'Carpet and upholstery refresh and sanitization',
        'Window and glass cleaning included',
        'Waste management and recycling services',
        'After-hours cleaning available (minimal disruption)',
      ],
      whatIncluded: [
        'All desk surfaces wiped and sanitized daily',
        'Office equipment dusted safely with proper techniques',
        'Meeting room chairs, tables, and floors cleaned',
        'Kitchen appliances and surfaces deep cleaned',
        'Break room thoroughly sanitized and restocked',
        'Carpets vacuumed and shampooed regularly',
        'High-touch surfaces (doors, handles) disinfected',
        'Waste and recycling properly managed and removed',
        'Floor polishing and maintenance included',
        'Professional restocking of cleaning supplies',
        'Health and safety compliance maintained',
      ],
      why: [
        'Expert commercial cleaning specialists for offices',
        'Minimal disruption to business operations',
        'Consistent, reliable service standards guaranteed',
        'Health and safety compliance certified',
      ],
    },
    'window-cleaning': {
      title: 'Window Cleaning',
      subtitle: 'Streak-free interior and exterior professional service',
      description: 'Interior and exterior window cleaning service delivering streak-free, crystal-clear results for homes and businesses. Let natural light flood your spaces with professionally cleaned windows.',
      price: 'Varies per property',
      pricingTiers: [
        { label: 'Small Property', price: '£40 – £70', description: 'Flats and small homes (5–10 windows)' },
        { label: 'Medium Property', price: '£70 – £120', description: 'Average homes (10–20 windows)' },
        { label: 'Large Property', price: '£120 – £200+', description: 'Large homes (20+ windows)' },
        { label: 'Commercial Building', price: 'Custom Quote', description: 'Office buildings and commercial properties' },
      ],
      features: [
        'Interior and exterior window pane cleaning',
        'Streak-free professional finish guaranteed',
        'High-reach access with proper safety equipment',
        'Frame and sill cleaning included',
        'Gutter and downpipe cleaning available',
        'Conservatory and skylight cleaning services',
        'Commercial building window cleaning',
        'Quarterly or seasonal maintenance plans available',
      ],
      whatIncluded: [
        'All exterior windows cleaned thoroughly with professionals',
        'Interior window panes polished to sparkling clean',
        'Window frames wiped and spot-cleaned',
        'Sills and ledges dusted and cleaned',
        'Frames and tracks vacuumed and wiped',
        'Spot-free professional finish applied throughout',
        'Scaffold or reach equipment deployed safely if needed',
        'Safe disposal of all cleaning waste',
        'Optional: gutter and downpipe cleaning',
        'Optional: conservatory and skylight cleaning',
      ],
      why: [
        'Expert window cleaning with specialized equipment',
        'Streak-free results guaranteed every time',
        'Safe handling of high-access and difficult areas',
        'Quick turnaround on all window cleaning projects',
      ],
    },
    'carpet-upholstery-cleaning': {
      title: 'Carpet & Upholstery Cleaning',
      subtitle: 'Professional steam cleaning and stain removal service',
      description: 'Deep steam cleaning and stain removal for carpets, sofas, and upholstery using professional-grade equipment. Revitalize your furnishings and remove stubborn stains and odors completely.',
      price: 'Varies per room or item',
      pricingTiers: [
        { label: 'Single Room', price: '£40 – £80', description: 'One room carpet cleaning (typically 1–2 hours)' },
        { label: 'Multiple Rooms', price: '£80 – £150', description: 'Two to three rooms combined discount' },
        { label: 'Single Sofa', price: '£60 – £100', description: 'Professional sofa or large furniture piece' },
        { label: 'Complete Package', price: '£150 – £300+', description: 'Whole house carpets + furniture cleaning' },
      ],
      features: [
        'Professional hot water extraction (steam cleaning)',
        'Advanced stain removal and treatment methods',
        'Odor elimination technology and sanitization',
        'Fabric-safe cleaning solutions throughout',
        'Quick-dry process minimizes downtime',
        'Carpet protection treatments available',
        'Sofa and armchair professional cleaning',
        'Mattress cleaning and sanitization services',
      ],
      whatIncluded: [
        'Pre-treatment consultation and stain inspection',
        'Professional steam cleaning applied systematically',
        'Deep extraction of dirt, moisture, and debris',
        'Targeted stain removal and spot treatment',
        'Comprehensive odor neutralization applied',
        'Protective coating option available',
        'Quick-dry technology reduces drying time',
        'Post-clean fabric conditioning and refresh',
        'Expert handling of delicate and expensive materials',
        'Full sanitization for health and hygiene',
        'Optional: upholstery and furniture cleaning',
        'Optional: mattress deep cleaning and sanitization',
      ],
      why: [
        'Expert technicians with professional-grade equipment',
        'Effective stain removal with lasting fabric protection',
        'Quick-drying methods minimize disruption and downtime',
        'Health and hygiene standards maintained throughout',
      ],
    },
  };

  const service = serviceDetails[serviceName];

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center overflow-x-hidden">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">The service you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/services')}
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-8 transition-colors"
          >
            <ChevronLeft size={24} />
            Back to Services
          </button>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-teal-600 font-semibold mb-6">
            {service.subtitle}
          </p>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whatIncluded.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-teal-50 transition-colors">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Pricing */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">Key Features</h2>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={16} className="text-teal-600" />
                  </div>
                  <span className="text-slate-700 font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-lg text-white space-y-6">
              <div>
                <p className="text-teal-100 text-sm uppercase tracking-wide mb-2">Typical Pricing</p>
                <p className="text-4xl font-bold">{service.price}</p>
              </div>

              {service.pricingTiers && (
                <div className="pt-6 border-t border-teal-400">
                  <p className="text-sm uppercase tracking-wide font-semibold mb-4">Pricing Options</p>
                  <div className="space-y-3">
                    {service.pricingTiers.map((tier, idx) => (
                      <div key={idx} className="bg-teal-400/30 rounded-lg p-3 hover:bg-teal-400/50 transition-colors">
                        <p className="font-semibold text-sm">{tier.label}</p>
                        <p className="text-lg font-bold">{tier.price}</p>
                        <p className="text-xs text-teal-100 mt-1">{tier.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-teal-400 space-y-2">
                <button 
                  onClick={() => navigate('/order')}
                  className="w-full px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Book Now
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+447440620492'}
                  className="w-full px-6 py-3 bg-teal-400 text-white font-semibold rounded-lg hover:bg-teal-300 transition-colors"
                >
                  <Phone size={18} className="inline mr-2" />
                  Call Now
                </button>
                <button 
                  onClick={() => window.location.href = 'mailto:thistleprimecleaning@gmail.com'}
                  className="w-full px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors"
                >
                  <Mail size={18} className="inline mr-2" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Service */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">Why Choose This Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.why.map((reason, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl border border-teal-200 text-center">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-slate-700 font-semibold">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-emerald-600 w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Book This Service?
          </h2>
          <p className="text-lg md:text-xl text-teal-50 mb-8">
            Contact us today to discuss your specific needs and get a personalized quote.
          </p>
          <button 
            onClick={() => navigate('/order')}
            className="px-8 py-4 bg-white text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Book Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'Dogs', path: '/dogs' },
      { name: 'Cats', path: '/cats' },
      { name: 'Food', path: '/food' },
      { name: 'Toys', path: '/toys' },
      { name: 'Treats', path: '/treats' },
      { name: 'Accessories', path: '/accessories' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Careers', path: '/careers' },
      { name: 'Store Locator', path: '/stores' },
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Track Order', path: '/track-order' },
      { name: 'Shipping Info', path: '/shipping' },
      { name: 'Returns', path: '/returns' },
      { name: 'FAQs', path: '/faqs' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Refund Policy', path: '/refund-policy' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
    ],
  };

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Youtube', icon: Youtube, url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-6 md:pt-12 pb-20 lg:pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="mb-6 md:mb-8">
          {/* Desktop: All in one row */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-4">
                <div className="text-2xl font-bold text-orange-500">🐾 PetStore</div>
              </Link>
              <p className="text-sm mb-4">
                Your trusted destination for premium pet supplies, food, and accessories. Making pet parenting easier and more joyful.
              </p>
              <div className="flex space-x-3">
                {socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Shop</h3>
              <ul className="space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:text-orange-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:text-orange-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:text-orange-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm">+91 1800-XXX-XXXX</p>
                    <p className="text-xs text-gray-400">Mon-Sat 9AM-6PM</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">support@petstore.com</p>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">123 Pet Street, Mumbai, India</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile & Tablet: Brand + Two Rows */}
          <div className="lg:hidden space-y-4 md:space-y-6">
            {/* Brand Section */}
            <div>
              <Link to="/" className="inline-block mb-3">
                <div className="text-xl md:text-2xl font-bold text-orange-500">🐾 PetStore</div>
              </Link>
              <p className="text-xs md:text-sm mb-3 md:mb-4">
                Your trusted destination for premium pet supplies, food, and accessories.
              </p>
              <div className="flex space-x-2 md:space-x-3">
                {socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 md:w-9 md:h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* First Row: Shop & Company */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Shop Links */}
              <div>
                <h3 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-lg">Shop</h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {footerLinks.shop.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-xs md:text-sm hover:text-orange-500 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-lg">Company</h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-xs md:text-sm hover:text-orange-500 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Second Row: Support & Contact */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Support Links */}
              <div>
                <h3 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-lg">Support</h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-xs md:text-sm hover:text-orange-500 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-lg">Contact Us</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start space-x-1.5 md:space-x-2">
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] md:text-xs">+91 1800-XXX-XXXX</p>
                      <p className="text-[10px] md:text-xs text-gray-400">Mon-Sat 9AM-6PM</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-1.5 md:space-x-2">
                    <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] md:text-xs">support@petstore.com</p>
                  </li>
                  <li className="flex items-start space-x-1.5 md:space-x-2">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] md:text-xs">123 Pet Street, Mumbai</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-4 md:pt-8 pb-4 md:pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-lg">Subscribe to our Newsletter</h3>
            <p className="text-xs md:text-sm mb-3 md:mb-4 text-gray-400">Get the latest updates on new products and upcoming sales</p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 md:px-4 py-2 md:py-2.5 text-sm rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-white"
              />
              <button className="px-4 md:px-6 py-2 md:py-2.5 text-sm bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment & Legal */}
        <div className="border-t border-gray-800 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <div className="text-xs md:text-sm text-gray-400">
              © {currentYear} PetStore. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.path} className="text-[10px] md:text-xs hover:text-orange-500 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[10px] md:text-xs text-gray-400">We Accept:</span>
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-8 h-5 md:w-10 md:h-6 bg-gray-800 rounded flex items-center justify-center text-[9px] md:text-xs font-bold">VISA</div>
                <div className="w-8 h-5 md:w-10 md:h-6 bg-gray-800 rounded flex items-center justify-center text-[9px] md:text-xs font-bold">MC</div>
                <div className="w-8 h-5 md:w-10 md:h-6 bg-gray-800 rounded flex items-center justify-center text-[9px] md:text-xs font-bold">UPI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

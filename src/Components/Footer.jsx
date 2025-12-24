import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold">EduX</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering learners worldwide with accessible, high-quality education and skill development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="text-blue-100 space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Explore Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Become an Instructor</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">My Learning</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Resources</h3>
            <ul className="text-blue-100 space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Stay Updated</h3>
            <p className="text-blue-100 mb-4 text-sm">Subscribe to get exclusive offers and updates on new courses.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-600 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg transition-colors duration-300 flex items-center justify-center">
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <p className="text-blue-200 text-sm">© 2025 EduX Academy. All rights reserved.</p>
            <p className="text-blue-200 text-sm">Made with <span className="text-red-400">❤</span> for learners worldwide</p>
            <p className="text-blue-200 text-sm">Version 1.0 | Crafted with passion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

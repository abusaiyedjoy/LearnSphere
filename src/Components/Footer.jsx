import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { GraduationCap, Heart } from 'lucide-react';
import Logo from './../assets/FavIcon.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 text-white relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-12 border-t border-blue-700">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                <img className='w-32' src={Logo} alt="Logo" />
              </div>
              <span className="text-2xl font-bold">LSphere</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Empowering learners worldwide with accessible, high-quality education and skill development.
            </p>
            <div className="flex gap-3">
              <a href="#" className="group w-10 h-10 rounded-full bg-blue-700/50 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-blue-600/50 hover:border-blue-500">
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a href="#" className="group w-10 h-10 rounded-full bg-blue-700/50 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-blue-600/50 hover:border-blue-500">
                <FaTwitter className="text-white text-sm" />
              </a>
              <a href="#" className="group w-10 h-10 rounded-full bg-blue-700/50 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-blue-600/50 hover:border-blue-500">
                <FaInstagram className="text-white text-sm" />
              </a>
              <a href="#" className="group w-10 h-10 rounded-full bg-blue-700/50 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-blue-600/50 hover:border-blue-500">
                <FaLinkedinIn className="text-white text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Home
              </a></li>
              <li><a href="/courses" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Explore Courses
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Become Instructor
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> My Learning
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Development
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Design
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Business
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Marketing
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Help Center
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Contact Us
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> FAQ
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Documentation
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Privacy Policy
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Terms of Service
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Cookie Policy
              </a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span> Accessibility
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
            <p className="text-blue-300 text-sm">
              © 2025 LearnSphere Academy. All rights reserved.
            </p>
            <p className="text-blue-300 text-sm flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> for learners worldwide
            </p>
            <p className="text-blue-300 text-sm text-center md:text-right">
              Version 1.0 | Crafted with <span className="text-blue-400">passion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

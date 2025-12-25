import { useState, useEffect } from 'react';
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 h-18 transition-all duration-300 ${isScrolled
                    ? "bg-white shadow-lg"
                    : "bg-white"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <img className='w-32' src={Logo} alt="Logo" />
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-64 px-4 py-2 pl-10 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                                />
                                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="px-5 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                    Login
                                </button>
                                <Link to="/signup" className="group flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 relative overflow-hidden">
                                    <span className="relative z-10">Register</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-colors z-50 shadow-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300 ${isMobileMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Side Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] md:hidden transform transition-transform duration-300 ease-out shadow-2xl ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                        <div className="flex items-center gap-2">
                            <img className='w-32' src={Logo} alt="Logo" />
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-700 hover:text-blue-600 p-2 hover:bg-blue-100 rounded-lg transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Mobile Search */}
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 pl-10 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                            />
                            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto py-6 px-4">
                        <nav className="space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 group"
                                >
                                    <span className="flex-1">{link.name}</span>
                                    <svg
                                        className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="p-6 border-t border-gray-200 space-y-3 bg-gradient-to-b from-blue-50 to-white">
                        <button className="w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors font-medium">
                            Login
                        </button>
                        <Link to="/signup" className="group flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-300  relative overflow-hidden">
                            <span className="relative z-10">Register Now</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;
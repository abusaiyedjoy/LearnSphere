import React from 'react';
import { ArrowRight, BookOpen, Sparkles, GraduationCap, Trophy, CheckCircle, Zap, Users as UsersIcon } from 'lucide-react';
import bannerImage from './../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="relative">
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
                <img src={bannerImage} alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />

                <div className="absolute inset-0 bg-black/40  z-1"></div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-0">
                    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Learn from the <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Best Experts</span> Today
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto px-2">
                            Master in-demand skills with industry experts. Join thousands of students learning on our platform with affordable, high-quality courses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-8">
                            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/50 transition-all duration-300 flex items-center justify-center gap-2 group">
                                Explore Courses
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                                Watch Demo
                                <span>▶</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
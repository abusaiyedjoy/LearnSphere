import React from 'react';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Banner = () => {
    return (
        <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Blob shapes */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-6 lg:space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full w-fit">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-700">Welcome to EduX Academy</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Build Skills With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Online Courses</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                            Learn from industry experts and advance your career with our comprehensive online courses. Start your learning journey today and unlock endless opportunities.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5 text-blue-600" />
                                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">50K+</span>
                                </div>
                                <span className="text-xs sm:text-sm text-gray-600">Students</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">500+</span>
                                </div>
                                <span className="text-xs sm:text-sm text-gray-600">Courses</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-blue-600" />
                                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">100+</span>
                                </div>
                                <span className="text-xs sm:text-sm text-gray-600">Instructors</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/40 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                                Explore Courses
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>Trusted by thousands of learners</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>Industry-verified instructors</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image/Illustration */}
                    <div className="relative h-96 sm:h-[450px] lg:h-[500px]">
                        {/* Gradient background container */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-2xl shadow-blue-200/50 overflow-hidden">
                            {/* Placeholder illustration with gradient overlay */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">

                                {/* SVG Illustration - Online Learning */}
                                <svg className="w-4/5 h-4/5 text-white opacity-90" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Laptop */}
                                    <rect x="50" y="120" width="300" height="200" rx="10" fill="white" opacity="0.1" stroke="white" strokeWidth="2" />
                                    <ellipse cx="200" cy="330" rx="160" ry="30" fill="white" opacity="0.1" stroke="white" strokeWidth="2" />

                                    {/* Screen content */}
                                    <circle cx="100" cy="150" r="15" fill="white" opacity="0.7" />
                                    <circle cx="150" cy="150" r="15" fill="white" opacity="0.5" />
                                    <circle cx="200" cy="150" r="15" fill="white" opacity="0.7" />
                                    <rect x="80" y="180" width="240" height="120" rx="5" fill="white" opacity="0.15" />
                                    <line x1="90" y1="190" x2="310" y2="190" stroke="white" strokeWidth="2" opacity="0.5" />
                                    <line x1="90" y1="210" x2="310" y2="210" stroke="white" strokeWidth="1" opacity="0.3" />
                                    <line x1="90" y1="230" x2="310" y2="230" stroke="white" strokeWidth="1" opacity="0.3" />

                                    {/* Books */}
                                    <rect x="30" y="250" width="60" height="80" rx="3" fill="white" opacity="0.2" stroke="white" strokeWidth="2" />
                                    <rect x="100" y="260" width="60" height="70" rx="3" fill="white" opacity="0.3" stroke="white" strokeWidth="2" />
                                    <rect x="170" y="270" width="60" height="60" rx="3" fill="white" opacity="0.25" stroke="white" strokeWidth="2" />

                                    {/* Badge/Star */}
                                    <circle cx="320" cy="80" r="30" fill="white" opacity="0.2" stroke="white" strokeWidth="2" />
                                    <path d="M320 60L325 75L341 75L329 85L334 100L320 90L306 100L311 85L299 75L315 75Z" fill="white" opacity="0.8" />
                                </svg>

                                {/* Floating element */}
                                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md p-4 rounded-lg border border-white/30 animate-bounce">
                                    <div className="text-white text-2xl font-bold">⭐</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating card - Bottom right */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs border border-gray-100">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-white font-bold text-sm">✓</div>
                                <span className="font-semibold text-gray-900">Certificate Ready</span>
                            </div>
                            <p className="text-sm text-gray-600">Earn recognized certificates upon course completion</p>
                        </div>

                        {/* Floating card - Top left */}
                        <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-2xl p-4 max-w-xs border border-gray-100">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xl">👥</span>
                                <span className="font-semibold text-sm text-gray-900">Expert Mentors</span>
                            </div>
                            <p className="text-xs text-gray-600">Learn from industry professionals</p>
                        </div>
                    </div>
                </div>

                {/* Bottom feature cards - Mobile and tablet optimized */}
                <div className="mt-20 sm:mt-24 lg:mt-28">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-2">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                <BookOpen className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                            <p className="text-gray-600 text-sm">Learn at your own pace with lifetime access to course materials.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-2">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                <Award className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h3>
                            <p className="text-gray-600 text-sm">Get industry-recognized certificates to boost your career.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-2">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                <Users className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                            <p className="text-gray-600 text-sm">Connect with fellow learners and grow together in our community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

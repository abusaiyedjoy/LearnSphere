import React from 'react';
import { ArrowRight, BookOpen, Users, Award, Zap, CheckCircle } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Split Layout CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Left Side - Student Path */}
                    <div className="relative overflow-hidden rounded-3xl p-12 sm:p-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 shadow-2xl shadow-blue-600/50">
                        {/* Decorative Elements */}
                        <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Start Learning Today
                            </h3>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Unlock your potential with expert-led courses designed for learners at every level. Master in-demand skills and advance your career.
                            </p>

                            {/* Features List */}
                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-blue-50">500+ Courses Available</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-blue-50">Learn at Your Own Pace</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-blue-50">Lifetime Access to Materials</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-blue-50">Industry-Recognized Certificates</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button className="group/btn w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 shadow-xl shadow-gray-900/20 transition-all duration-300 hover:scale-105">
                                Explore Courses
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>

                            {/* Stats */}
                            <div className="mt-8 pt-8 border-t border-white/20">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-white">50K+</p>
                                    <p className="text-blue-200 text-sm mt-1">Active Learners</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Instructor Path */}
                    <div className="relative overflow-hidden rounded-3xl p-12 sm:p-16 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 shadow-2xl shadow-purple-600/50">
                        {/* Decorative Elements */}
                        <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Award className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Become an Instructor
                            </h3>
                            <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                                Share your expertise with thousands of learners worldwide. Build a sustainable income while making a real impact on education.
                            </p>

                            {/* Features List */}
                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-purple-50">Flexible Teaching Schedule</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-purple-50">High Earning Potential</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-purple-50">Marketing & Promotion Support</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-purple-50">24/7 Instructor Support</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button className="group/btn w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 shadow-xl shadow-gray-900/20 transition-all duration-300 hover:scale-105">
                                Start Teaching
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>

                            {/* Stats */}
                            <div className="mt-8 pt-8 border-t border-white/20">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-white">100+</p>
                                    <p className="text-purple-200 text-sm mt-1">Expert Instructors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Section */}
                <div className="mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4 group-hover:bg-blue-200 transition-colors">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <p className="text-3xl font-bold text-gray-900 mb-1">50K+</p>
                            <p className="text-gray-600">Active Students</p>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4 group-hover:bg-purple-200 transition-colors">
                                <BookOpen className="w-6 h-6 text-purple-600" />
                            </div>
                            <p className="text-3xl font-bold text-gray-900 mb-1">500+</p>
                            <p className="text-gray-600">Courses Published</p>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4 group-hover:bg-green-200 transition-colors">
                                <Award className="w-6 h-6 text-green-600" />
                            </div>
                            <p className="text-3xl font-bold text-gray-900 mb-1">100+</p>
                            <p className="text-gray-600">Instructors</p>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-4 group-hover:bg-orange-200 transition-colors">
                                <Zap className="w-6 h-6 text-orange-600" />
                            </div>
                            <p className="text-3xl font-bold text-gray-900 mb-1">95%</p>
                            <p className="text-gray-600">Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;


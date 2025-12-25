import React from 'react';
import { Users, BookOpen, Award, TrendingUp, ArrowRight } from 'lucide-react';

const HighlightSection = () => {
    const stats = [
        {
            id: 1,
            icon: Users,
            label: "Active Students",
            value: "50,000+",
            color: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            icon: BookOpen,
            label: "Online Courses",
            value: "500+",
            color: "from-purple-500 to-purple-600"
        },
        {
            id: 3,
            icon: Award,
            label: "Expert Instructors",
            value: "100+",
            color: "from-pink-500 to-pink-600"
        },
        {
            id: 4,
            icon: TrendingUp,
            label: "Success Rate",
            value: "95%",
            color: "from-green-500 to-green-600"
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Grid */}
                <div className="mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
                        Why Choose LearnSphere Academy
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {stats.map((stat) => {
                            const IconComponent = stat.icon;
                            return (
                                <div
                                    key={stat.id}
                                    className="relative group overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                                >
                                    {/* Background gradient on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                                            <IconComponent className="w-8 h-8" />
                                        </div>
                                        <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
                                        <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Promotional Banner Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                    {/* Left Banner */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl p-8 sm:p-12 text-white shadow-2xl shadow-blue-600/50">
                        {/* Decorative elements */}
                        <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full"></div>
                        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                                ✨ LIMITED TIME OFFER
                            </span>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                                Get Premium Access Today
                            </h3>
                            <p className="text-blue-100 mb-8 text-lg">
                                Unlock unlimited access to all premium courses and exclusive content. Start learning with industry experts.
                            </p>
                            <button className="group flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 shadow-lg shadow-gray-900/30 transition-all duration-300 hover:scale-105">
                                Claim Your Discount
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Banner */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl p-8 sm:p-12 text-white shadow-2xl shadow-purple-600/50">
                        {/* Decorative elements */}
                        <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full"></div>
                        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                                🎓 INSTRUCTOR PROGRAM
                            </span>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                                Teach Your Skills
                            </h3>
                            <p className="text-purple-100 mb-8 text-lg">
                                Join thousands of instructors earning by sharing their expertise. Build your portfolio and income.
                            </p>
                            <button className="group flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 shadow-lg shadow-gray-900/30 transition-all duration-300 hover:scale-105">
                                Start Teaching
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Informational Block */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div>
                            <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
                                WHY WE'RE DIFFERENT
                            </span>
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Quality Education at Your Fingertips
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {[
                                { title: "Learn from Industry Experts", desc: "Our instructors are working professionals with years of experience" },
                                { title: "Lifetime Access", desc: "Access course materials anytime, anywhere, on any device" },
                                { title: "Certificate of Completion", desc: "Boost your resume with recognized industry certificates" },
                                { title: "24/7 Community Support", desc: "Get help when you need it from our active community" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                                            ✓
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image/Illustration */}
                    <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/50 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
                        {/* Placeholder with SVG */}
                        <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-3/4 h-3/4 text-white opacity-90" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="50" y="80" width="300" height="240" rx="15" fill="white" opacity="0.15" />
                                <circle cx="200" cy="150" r="40" fill="white" opacity="0.3" />
                                <path d="M 140 220 Q 200 240 260 220" stroke="white" strokeWidth="3" opacity="0.3" />
                                <rect x="120" y="290" width="160" height="8" rx="4" fill="white" opacity="0.2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightSection;

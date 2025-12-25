import { ArrowRight, BookOpen, Users, Award, Zap, CheckCircle, Sparkles, Target } from 'lucide-react';
import course1 from './../assets/course5.jpg';

const CTASection = () => {
    return (
        <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
            <div className="fixed inset-0 -z-10 w-full h-screen">
                <img
                    src={course1}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-900/75 to-black/70"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
                    <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-600/50 hover:shadow-blue-600/70 transition-all duration-300 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-white/10 border border-white/20"></div>

                        <div className="relative z-10 p-12 sm:p-16 flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-6 w-fit">
                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm font-bold text-white/90 uppercase tracking-wider">For Students</span>
                            </div>

                            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                                Start Your Learning Journey
                            </h3>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-md">
                                Master in-demand skills with expert-led courses designed for learners at every level. Advance your career today.
                            </p>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="flex items-center gap-3 group/item">
                                    <div className="w-6 h-6 rounded-full bg-green-400/90 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90 font-medium group-hover/item:translate-x-1 transition-transform">500+ Expert-Curated Courses</span>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="w-6 h-6 rounded-full bg-green-400/90 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90 font-medium group-hover/item:translate-x-1 transition-transform">Lifetime Access & Updates</span>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="w-6 h-6 rounded-full bg-green-400/90 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90 font-medium group-hover/item:translate-x-1 transition-transform">Recognized Certificates</span>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="w-6 h-6 rounded-full bg-green-400/90 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90 font-medium group-hover/item:translate-x-1 transition-transform">Active Learning Community</span>
                                </div>
                            </div>

                            <button className="group/btn w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-white text-blue-600 font-bold rounded-xl shadow-xl shadow-gray-900/40 transition-all duration-300 hover:scale-105 mb-6">
                                Explore 500+ Courses
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Instructor Path */}
                    <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-purple-600/50 hover:shadow-purple-600/70 transition-all duration-300 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-white/10 border border-white/20"></div>

                        <div className="relative z-10 p-12 sm:p-16 flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-6 w-fit">
                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm font-bold text-white/90 uppercase tracking-wider">For Instructors</span>
                            </div>

                            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                                Share Your Expertise
                            </h3>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-md">
                                Build a sustainable income while making a real impact. Reach thousands of eager learners worldwide.
                            </p>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="flex items-center gap-3 group/item">
                                    <div className="w-6 h-6 rounded-full bg-green-400/90 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90 font-medium group-hover/item:translate-x-1 transition-transform">Flexible Teaching Schedule</span>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="w-6 h-6 rounded-full bg-green-400/90 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90 font-medium group-hover/item:translate-x-1 transition-transform">Competitive Revenue Share</span>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="w-6 h-6 rounded-full bg-green-400/90 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90 font-medium group-hover/item:translate-x-1 transition-transform">Marketing & Promotion Support</span>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="w-6 h-6 rounded-full bg-green-400/90 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white/90 font-medium group-hover/item:translate-x-1 transition-transform">24/7 Instructor Support</span>
                                </div>
                            </div>

                            <button className="group/btn w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-white to-purple-100 hover:from-purple-50 hover:to-white text-purple-600 font-bold rounded-xl shadow-xl shadow-gray-900/40 transition-all duration-300 hover:scale-105 mb-6">
                                Join Our Instructors
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Section */}
                <div className="pt-12 border-t border-white/20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Trusted by Thousands Worldwide
                        </h3>
                        <p className="text-white/80 max-w-2xl mx-auto">
                            Join a global community of learners and instructors transforming their lives through quality education.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Users, value: "50K+", label: "Active Students", color: "from-blue-500 to-blue-600" },
                            { icon: BookOpen, value: "500+", label: "Courses Published", color: "from-purple-500 to-purple-600" },
                            { icon: Award, value: "100+", label: "Expert Instructors", color: "from-green-500 to-green-600" },
                            { icon: Zap, value: "95%", label: "Success Rate", color: "from-orange-500 to-orange-600" }
                        ].map((stat, idx) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={idx} className="group relative overflow-hidden">
                                    <div className="relative p-8 text-center ">

                                        <div className="relative z-10">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                                <IconComponent className="w-7 h-7" />
                                            </div>
                                            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</p>
                                            <p className="text-white/80 font-semibold">{stat.label}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;


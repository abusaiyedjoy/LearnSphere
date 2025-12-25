import React from 'react';
import { Users, BookOpen, Award, TrendingUp, ArrowRight } from 'lucide-react';
import course1 from './../assets/course1.jpg';

const HighlightSection = () => {

    return (
        <section className="py-16 sm:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

                    <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/50 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
                        <img
                            src={course1}
                            alt="Quality Education"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightSection;

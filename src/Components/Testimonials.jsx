import { Star, Quote } from 'lucide-react';
import course1 from './../assets/course1.jpg';
import course2 from './../assets/course2.jpg';
import course3 from './../assets/course3.jpg';
import course4 from './../assets/course4.jpg';
import course5 from './../assets/course5.jpg';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Martinez",
            role: "Web Developer",
            avatar: course1,
            quote: "LearnSphere Academy transformed my career! I went from beginner to landing a job at a top tech company within 6 months. The courses are comprehensive and the instructors are incredibly helpful.",
            rating: 5,
            color: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            name: "David Chen",
            role: "UI/UX Designer",
            avatar: course2,
            quote: "The design courses here are phenomenal. I learned so much about user experience and design principles. Now I'm confidently taking on freelance projects and earning great income.",
            rating: 5,
            color: "from-purple-500 to-purple-600"
        },
        {
            id: 3,
            name: "Emma Wilson",
            role: "Digital Marketer",
            avatar: course3,
            quote: "What impressed me most is the practical approach. All courses include real-world projects, which helped me build a strong portfolio. Highly recommend to anyone looking to switch careers.",
            rating: 5,
            color: "from-pink-500 to-pink-600"
        },
        {
            id: 4,
            name: "James Anderson",
            role: "Software Engineer",
            avatar: course4,
            quote: "The advanced React course was exactly what I needed to upgrade my skills. The curriculum is up-to-date with industry standards and the support from instructors is outstanding.",
            rating: 5,
            color: "from-green-500 to-green-600"
        },
        {
            id: 5,
            name: "Lisa Johnson",
            role: "Product Manager",
            avatar: course5,
            quote: "I completed three courses and each one was worth every penny. The instructors share their personal experiences and insights that you won't find in typical online courses.",
            rating: 5,
            color: "from-red-500 to-red-600"
        },
        {
            id: 6,
            name: "Michael Brown",
            role: "Full Stack Developer",
            avatar: course1,
            quote: "The community support is amazing. When I had questions, both instructors and fellow students helped me quickly. It feels like being part of a real learning community.",
            rating: 5,
            color: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
                        STUDENT REVIEWS
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Students Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join thousands of satisfied learners who have transformed their careers and lives through our courses.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <div className="relative z-10 mb-6">
                                <Quote className="w-6 h-6 text-blue-200 mb-3" />
                                <p className="text-gray-700 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-blue-400 transition-all duration-300 shadow-lg">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

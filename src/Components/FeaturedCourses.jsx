import React from 'react';
import { Star, Users, Clock, ArrowRight, TrendingUp, Award, Target } from 'lucide-react';

const FeaturedCourses = () => {
    const courses = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            instructor: "Sarah Johnson",
            category: "Development",
            image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            duration: "40 hours",
            students: "12,450",
            rating: 4.8,
            reviews: 3245,
            price: "Free",
            isFree: true,
            level: "Beginner",
            certificate: true,
            projects: 5
        },
        {
            id: 2,
            title: "UI/UX Design Masterclass",
            instructor: "Mike Chen",
            category: "Design",
            image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            duration: "35 hours",
            students: "8,920",
            rating: 4.9,
            reviews: 1987,
            price: "$49.99",
            isFree: false,
            level: "Intermediate",
            certificate: true,
            projects: 4
        },
        {
            id: 3,
            title: "Digital Marketing Strategy",
            instructor: "Emma Wilson",
            category: "Business",
            image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            duration: "28 hours",
            students: "6,750",
            rating: 4.7,
            reviews: 1542,
            price: "Free",
            isFree: true,
            level: "Beginner",
            certificate: true,
            projects: 3
        },
        {
            id: 4,
            title: "Advanced React & Next.js",
            instructor: "David Kumar",
            category: "Development",
            image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            duration: "45 hours",
            students: "10,230",
            rating: 4.9,
            reviews: 2876,
            price: "$79.99",
            isFree: false,
            level: "Advanced",
            certificate: true,
            projects: 6
        },
        {
            id: 5,
            title: "Motion Graphics & Animation",
            instructor: "Lisa Anderson",
            category: "Design",
            image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            duration: "32 hours",
            students: "5,640",
            rating: 4.8,
            reviews: 987,
            price: "$59.99",
            isFree: false,
            level: "Intermediate",
            certificate: true,
            projects: 5
        },
        {
            id: 6,
            title: "Python for Data Science",
            instructor: "James Mitchell",
            category: "Development",
            image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
            duration: "50 hours",
            students: "14,890",
            rating: 4.9,
            reviews: 4123,
            price: "Free",
            isFree: true,
            level: "Intermediate",
            certificate: true,
            projects: 7
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
                            MOST POPULAR
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Featured Courses
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl">
                            Explore our handpicked courses designed by industry experts to help you master in-demand skills.
                        </p>
                    </div>

                    <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/40 whitespace-nowrap">
                        View All Courses
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                                <div style={{ backgroundImage: course.image }} className="w-full h-full group-hover:scale-110 transition-transform duration-300 opacity-80"></div>

                                {/* Badges Container */}
                                <div className="absolute inset-0 flex items-start justify-between p-4">
                                    {/* Category Badge */}
                                    <div className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600 shadow-lg">
                                        {course.category}
                                    </div>

                                    {/* Level Badge */}
                                    <div className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${course.level === 'Beginner' ? 'bg-green-100/95 text-green-700' :
                                            course.level === 'Intermediate' ? 'bg-yellow-100/95 text-yellow-700' :
                                                'bg-red-100/95 text-red-700'
                                        } backdrop-blur-sm`}>
                                        {course.level}
                                    </div>
                                </div>

                                {/* Rating Badge */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-bold text-gray-900">{course.rating}</span>
                                    </div>
                                    <span className="text-xs text-gray-600">({course.reviews.toLocaleString()})</span>
                                </div>

                                {/* Trending Badge */}
                                {course.students > 10000 && (
                                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 bg-orange-500/95 backdrop-blur-sm rounded-full text-white text-xs font-bold shadow-lg">
                                        <TrendingUp className="w-3 h-3" /> Trending
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>

                                {/* Instructor */}
                                <p className="text-sm text-gray-600 mb-4">
                                    By <span className="font-semibold text-gray-900">{course.instructor}</span>
                                </p>

                                {/* Meta Info Grid */}
                                <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{course.students}</span>
                                    </div>
                                    {course.certificate && (
                                        <div className="flex items-center gap-2">
                                            <Award className="w-4 h-4 text-green-600 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">Certificate</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <Target className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{course.projects} Projects</span>
                                    </div>
                                </div>

                                {/* Footer with Price and Button */}
                                <div className="flex items-center justify-between mt-auto gap-4">
                                    <div>
                                        <p className="text-xs text-gray-600 mb-1">Price</p>
                                        <p className={`text-xl font-bold ${course.isFree ? 'text-green-600' : 'text-gray-900'}`}>
                                            {course.price}
                                        </p>
                                    </div>

                                    <button className="group/btn flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-600/40 transition-all duration-300 hover:scale-110 flex items-center justify-center border border-blue-500/50 hover:border-blue-400">
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Call to Action Text */}
                                <p className="text-xs text-blue-600 font-medium mt-3 text-center group-hover:text-blue-700 transition-colors">
                                    Explore Now →
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;

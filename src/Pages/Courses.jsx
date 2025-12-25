import React, { useState } from 'react';
import { Search, ChevronDown, Grid3x3, List, ChevronLeft, ChevronRight } from 'lucide-react';
import CourseCard from '../Components/CourseCard';
import FilterSidebar from '../Components/FilterSidebar';
import course1 from './../assets/course1.jpg';
import course2 from './../assets/course2.jpg';
import course3 from './../assets/course3.jpg';
import course4 from './../assets/course4.jpg';
import course5 from './../assets/course5.jpg';

const Courses = () => {

    const allCourses = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            instructor: "Sarah Johnson",
            category: "Development",
            image: course1,
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
            image: course2,
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
            category: "Digital Marketing",
            image: course3,
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
            image: course4,
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
            image: course5,
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
            image: course1,
            duration: "50 hours",
            students: "14,890",
            rating: 4.9,
            reviews: 4123,
            price: "Free",
            isFree: true,
            level: "Intermediate",
            certificate: true,
            projects: 7
        },
        {
            id: 7,
            title: "Business Management Essentials",
            instructor: "Robert Taylor",
            category: "Business",
            image: course2,
            duration: "25 hours",
            students: "7,230",
            rating: 4.6,
            reviews: 1850,
            price: "$39.99",
            isFree: false,
            level: "Beginner",
            certificate: true,
            projects: 3
        },
        {
            id: 8,
            title: "Professional Photography Course",
            instructor: "Jennifer Lee",
            category: "Photography",
            image: course3,
            duration: "38 hours",
            students: "4,320",
            rating: 4.8,
            reviews: 920,
            price: "$69.99",
            isFree: false,
            level: "Intermediate",
            certificate: true,
            projects: 4
        },
        {
            id: 9,
            title: "Content Marketing Mastery",
            instructor: "Rachel Green",
            category: "Digital Marketing",
            image: course4,
            duration: "30 hours",
            students: "5,890",
            rating: 4.7,
            reviews: 1240,
            price: "$49.99",
            isFree: false,
            level: "Intermediate",
            certificate: true,
            projects: 4
        },
        {
            id: 10,
            title: "Vue.js & Nuxt Full Stack",
            instructor: "Alex Chen",
            category: "Development",
            image: course5,
            duration: "48 hours",
            students: "8,450",
            rating: 4.9,
            reviews: 2340,
            price: "$89.99",
            isFree: false,
            level: "Advanced",
            certificate: true,
            projects: 6
        },
        {
            id: 11,
            title: "Graphic Design Fundamentals",
            instructor: "Maya Patel",
            category: "Design",
            image: course1,
            duration: "28 hours",
            students: "9,120",
            rating: 4.7,
            reviews: 1560,
            price: "$44.99",
            isFree: false,
            level: "Beginner",
            certificate: true,
            projects: 4
        },
        {
            id: 12,
            title: "SEO Optimization Masterclass",
            instructor: "John Smith",
            category: "Digital Marketing",
            image: course2,
            duration: "22 hours",
            students: "6,340",
            rating: 4.6,
            reviews: 1100,
            price: "Free",
            isFree: true,
            level: "Intermediate",
            certificate: true,
            projects: 3
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-12 sm:mb-16 text-center mx-auto flex flex-col items-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight max-w-4xl">
                        Discover <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Quality Courses</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Browse our comprehensive collection of {allCourses.length} professional courses taught by industry experts. Find the perfect course to advance your skills.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-12 flex justify-center">
                    <div className="relative max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-6 py-4 pl-12 bg-white border-2 border-gray-200 hover:border-blue-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all shadow-lg shadow-gray-900/5 font-medium"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar - Filters */}
                    <div className="lg:col-span-1">
                        <FilterSidebar
                        />
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        {/* Toolbar */}
                        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-2xl border border-gray-200 p-6 shadow-lg shadow-gray-900/5">
                            <div className="text-gray-600">
                                <p className="text-sm font-medium">
                                    Showing <span className="font-bold text-gray-900">2</span> of <span className="font-bold text-gray-900">6</span> courses
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                {/* Sort Dropdown */}
                                <div className="relative">
                                    <select
                                        className="appearance-none px-4 py-2 bg-gray-100 border-2 border-gray-200 hover:border-blue-300 rounded-lg text-gray-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 cursor-pointer pr-10 transition-all"
                                    >
                                        <option value="popular">Most Popular</option>
                                        <option value="rating">Highest Rated</option>
                                        <option value="newest">Newest First</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>

                                {/* View Type Toggle */}
                                <div className="flex gap-2 bg-gray-100 p-1.5 rounded-xl">
                                    <button
                                        className=
                                        'p-2 rounded-lg transition-all duration-300 font-medium'
                                    >
                                        <Grid3x3 className="w-5 h-5" />
                                    </button>
                                    <button
                                        className='p-2 rounded-lg transition-all duration-300 font-medium'
                                    >
                                        <List className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Courses Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {allCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>

                        {/* Pagination */}

                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <button
                                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-gray-900 font-medium hover:border-blue-300 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Previous
                            </button>

                            <div className="flex gap-2">
                                <button
                                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 border-2 bg-white border-gray-200 text-gray-900 hover:border-blue-300 hover:text-blue-600'
                                                    }`}
                                >5
                                </button>
                            </div>

                            <button
                                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-gray-900 font-medium hover:border-blue-300 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                Next
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;

import React, { useState } from 'react';
import { Star, Users, Clock, Globe, Heart, Share2, ChevronDown, ChevronUp, Play, Lock } from 'lucide-react';

const CourseDetail = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [expandedModule, setExpandedModule] = useState(0);

    const courseData = {
        id: 1,
        title: "Complete Web Development Bootcamp 2024",
        instructor: "Sarah Johnson",
        instructorBio: "Senior Full-Stack Developer with 10+ years of experience",
        category: "Development",
        price: "Free",
        rating: 4.8,
        students: 12450,
        duration: "40 hours",
        language: "English",
        level: "Beginner",
        image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    };

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'curriculum', label: 'Curriculum' },
        { id: 'instructor', label: 'Instructor' },
        { id: 'faq', label: 'FAQ' },
        { id: 'reviews', label: 'Reviews' }
    ];

    const curriculum = [
        {
            id: 1,
            module: "Module 1: Getting Started with Web Development",
            lessons: [
                { id: 1, title: "Introduction to Web Development", duration: "12 min", locked: false },
                { id: 2, title: "Setting Up Your Development Environment", duration: "18 min", locked: false },
                { id: 3, title: "HTML Basics and Structure", duration: "25 min", locked: false },
                { id: 4, title: "Semantic HTML", duration: "20 min", locked: false }
            ]
        },
        {
            id: 2,
            module: "Module 2: CSS Styling and Layouts",
            lessons: [
                { id: 5, title: "CSS Basics and Selectors", duration: "22 min", locked: false },
                { id: 6, title: "Flexbox Layout", duration: "30 min", locked: false },
                { id: 7, title: "CSS Grid Mastery", duration: "35 min", locked: false },
                { id: 8, title: "Responsive Design Principles", duration: "28 min", locked: false },
                { id: 9, title: "CSS Animations and Transitions", duration: "25 min", locked: false }
            ]
        },
        {
            id: 3,
            module: "Module 3: JavaScript Fundamentals",
            lessons: [
                { id: 10, title: "Variables and Data Types", duration: "20 min", locked: false },
                { id: 11, title: "Functions and Scope", duration: "32 min", locked: false },
                { id: 12, title: "DOM Manipulation", duration: "28 min", locked: false },
                { id: 13, title: "Event Handling", duration: "25 min", locked: false }
            ]
        },
        {
            id: 4,
            module: "Module 4: Advanced JavaScript & ES6+",
            lessons: [
                { id: 14, title: "Arrow Functions", duration: "15 min", locked: false },
                { id: 15, title: "Promises and Async/Await", duration: "35 min", locked: false },
                { id: 16, title: "Destructuring and Spread Operator", duration: "22 min", locked: false }
            ]
        },
        {
            id: 5,
            module: "Module 5: Building Real-World Projects",
            lessons: [
                { id: 17, title: "Project 1: Portfolio Website", duration: "60 min", locked: false },
                { id: 18, title: "Project 2: Todo App", duration: "45 min", locked: false },
                { id: 19, title: "Project 3: Weather App", duration: "50 min", locked: false }
            ]
        }
    ];

    const descriptionPoints = [
        "Master HTML, CSS, and JavaScript from scratch",
        "Build responsive and modern web applications",
        "Learn best practices and industry standards",
        "Create a professional portfolio project",
        "Get lifetime access to course materials"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Left Content */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
                                {courseData.category} • {courseData.level}
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                                {courseData.title}
                            </h1>
                            <p className="text-gray-600 text-lg mb-6">
                                Master web development with our comprehensive bootcamp course. Learn from industry experts and build real-world projects.
                            </p>

                            {/* Instructor Info */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                    SJ
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{courseData.instructor}</p>
                                    <p className="text-sm text-gray-600">{courseData.instructorBio}</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold text-gray-900">{courseData.rating}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-600">{(courseData.students / 1000).toFixed(1)}K Students</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-600">{courseData.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-600">{courseData.language}</span>
                                </div>
                            </div>
                        </div>

                        {/* Course Preview Image */}
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/50">
                            <div style={{ backgroundImage: courseData.image }} className="w-full h-full"></div>
                            <button className="absolute inset-0 flex items-center justify-center hover:bg-black/30 transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Sidebar - Course Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl sticky top-32">
                            {/* Price */}
                            <div className="mb-6">
                                <p className="text-sm text-gray-600 mb-2">Price</p>
                                <p className="text-4xl font-bold text-green-600">{courseData.price}</p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-3 mb-6">
                                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/40 transition-all hover:scale-105">
                                    Enroll Now
                                </button>
                                <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                                    <Heart className="w-5 h-5" />
                                    Add to Wishlist
                                </button>
                            </div>

                            {/* Share */}
                            <button className="w-full px-6 py-3 border border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Share Course
                            </button>

                            {/* Divider */}
                            <div className="h-px bg-gray-200 my-6"></div>

                            {/* Key Points */}
                            <div className="space-y-3">
                                {descriptionPoints.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                                            ✓
                                        </div>
                                        <span className="text-sm text-gray-700">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200 flex flex-wrap">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 px-4 sm:px-8 py-4 font-semibold text-center transition-all duration-300 border-b-2 ${activeTab === tab.id
                                    ? 'text-blue-600 border-b-blue-600'
                                    : 'text-gray-600 border-b-transparent hover:text-gray-900'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-8 sm:p-12">
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        This comprehensive Web Development Bootcamp is designed for complete beginners who want to master HTML, CSS, JavaScript, and modern web development practices. Throughout this course, you'll learn to build responsive, modern websites and web applications from scratch.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        By the end of this course, you'll have a professional portfolio with multiple real-world projects that you can showcase to potential employers or clients.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {descriptionPoints.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                                                    ✓
                                                </div>
                                                <span className="text-gray-700">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Curriculum Tab - Functional */}
                        {activeTab === 'curriculum' && (
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                                {curriculum.map((section, idx) => (
                                    <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                        {/* Module Header */}
                                        <button
                                            onClick={() => setExpandedModule(expandedModule === idx ? -1 : idx)}
                                            className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 flex items-center justify-between transition-all duration-300"
                                        >
                                            <div className="text-left flex-grow">
                                                <h4 className="font-semibold text-gray-900">{section.module}</h4>
                                                <p className="text-sm text-gray-600 mt-1">{section.lessons.length} Lessons</p>
                                            </div>
                                            {expandedModule === idx ? (
                                                <ChevronUp className="w-5 h-5 text-blue-600" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-600" />
                                            )}
                                        </button>

                                        {/* Lessons - Only show when expanded */}
                                        {expandedModule === idx && (
                                            <div className="space-y-2 p-6 bg-gray-50 border-t border-gray-200">
                                                {section.lessons.map((lesson) => (
                                                    <div key={lesson.id} className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all cursor-pointer group">
                                                        <div className="flex-shrink-0">
                                                            {lesson.locked ? (
                                                                <Lock className="w-5 h-5 text-gray-400" />
                                                            ) : (
                                                                <Play className="w-5 h-5 text-blue-600 group-hover:scale-125 transition-transform" />
                                                            )}
                                                        </div>
                                                        <div className="flex-grow">
                                                            <p className={`font-medium ${lesson.locked ? 'text-gray-500' : 'text-gray-900 group-hover:text-blue-600 transition-colors'}`}>
                                                                {lesson.title}
                                                            </p>
                                                        </div>
                                                        <span className="text-sm text-gray-600 whitespace-nowrap">{lesson.duration}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Instructor Tab - Display Only */}
                        {activeTab === 'instructor' && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900">Meet Your Instructor</h3>
                                <div className="flex items-start gap-6">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-4xl flex-shrink-0">
                                        SJ
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{courseData.instructor}</h4>
                                        <p className="text-gray-600 mb-4">{courseData.instructorBio}</p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Sarah has been teaching web development for over 8 years and has helped thousands of students transition into successful tech careers. Her teaching approach combines theory with practical, hands-on experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* FAQ Tab - Display Only */}
                        {activeTab === 'faq' && (
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                                <p className="text-gray-600 text-center py-8">FAQ content is not implemented in this version.</p>
                            </div>
                        )}

                        {/* Reviews Tab - Display Only */}
                        {activeTab === 'reviews' && (
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h3>
                                <p className="text-gray-600 text-center py-8">Reviews section is not implemented in this version.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;

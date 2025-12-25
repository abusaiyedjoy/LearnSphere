import React, { useState } from 'react';
import { Search, ChevronDown, Grid3x3, List, ChevronLeft, ChevronRight, Star, Users, Clock } from 'lucide-react';

const Courses = () => {
    const [viewType, setViewType] = useState('grid');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [sortBy, setSortBy] = useState('popular');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'All Categories', count: 500 },
        { id: 'development', name: 'Development', count: 124 },
        { id: 'design', name: 'Design', count: 86 },
        { id: 'business', name: 'Business', count: 67 },
        { id: 'marketing', name: 'Digital Marketing', count: 54 },
        { id: 'photography', name: 'Photography', count: 45 }
    ];

    const levels = [
        { id: 'all', name: 'All Levels' },
        { id: 'beginner', name: 'Beginner' },
        { id: 'intermediate', name: 'Intermediate' },
        { id: 'advanced', name: 'Advanced' }
    ];

    const priceRanges = [
        { id: 'all', label: 'All Prices' },
        { id: 'free', label: 'Free' },
        { id: 'under50', label: 'Under $50' },
        { id: 'under100', label: 'Under $100' },
        { id: 'over100', label: '$100+' }
    ];

    const allCourses = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            instructor: "Sarah Johnson",
            category: "Development",
            level: "Beginner",
            price: "Free",
            image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            rating: 4.8,
            students: 12450,
            duration: "40 hours"
        },
        {
            id: 2,
            title: "UI/UX Design Masterclass",
            instructor: "Mike Chen",
            category: "Design",
            level: "Intermediate",
            price: "$49.99",
            image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            rating: 4.9,
            students: 8920,
            duration: "35 hours"
        },
        {
            id: 3,
            title: "Digital Marketing Strategy",
            instructor: "Emma Wilson",
            category: "Digital Marketing",
            level: "Intermediate",
            price: "Free",
            image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            rating: 4.7,
            students: 6750,
            duration: "28 hours"
        },
        {
            id: 4,
            title: "Advanced React & Next.js",
            instructor: "David Kumar",
            category: "Development",
            level: "Advanced",
            price: "$79.99",
            image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            rating: 4.9,
            students: 10230,
            duration: "45 hours"
        },
        {
            id: 5,
            title: "Motion Graphics & Animation",
            instructor: "Lisa Anderson",
            category: "Design",
            level: "Intermediate",
            price: "$59.99",
            image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            rating: 4.8,
            students: 5640,
            duration: "32 hours"
        },
        {
            id: 6,
            title: "Python for Data Science",
            instructor: "James Mitchell",
            category: "Development",
            level: "Beginner",
            price: "Free",
            image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
            rating: 4.9,
            students: 14890,
            duration: "50 hours"
        },
        {
            id: 7,
            title: "Business Management Essentials",
            instructor: "Robert Taylor",
            category: "Business",
            level: "Beginner",
            price: "$39.99",
            image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            rating: 4.6,
            students: 7230,
            duration: "25 hours"
        },
        {
            id: 8,
            title: "Professional Photography Course",
            instructor: "Jennifer Lee",
            category: "Photography",
            level: "Intermediate",
            price: "$69.99",
            image: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
            rating: 4.8,
            students: 4320,
            duration: "38 hours"
        },
        {
            id: 9,
            title: "Content Marketing Mastery",
            instructor: "Rachel Green",
            category: "Digital Marketing",
            level: "Intermediate",
            price: "$49.99",
            image: "linear-gradient(135deg, #2e2e78 0%, #6a4c93 100%)",
            rating: 4.7,
            students: 5890,
            duration: "30 hours"
        },
        {
            id: 10,
            title: "Vue.js & Nuxt Full Stack",
            instructor: "Alex Chen",
            category: "Development",
            level: "Advanced",
            price: "$89.99",
            image: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",
            rating: 4.9,
            students: 8450,
            duration: "48 hours"
        },
        {
            id: 11,
            title: "Graphic Design Fundamentals",
            instructor: "Maya Patel",
            category: "Design",
            level: "Beginner",
            price: "$44.99",
            image: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",
            rating: 4.7,
            students: 9120,
            duration: "28 hours"
        },
        {
            id: 12,
            title: "SEO Optimization Masterclass",
            instructor: "John Smith",
            category: "Digital Marketing",
            level: "Intermediate",
            price: "Free",
            image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            rating: 4.6,
            students: 6340,
            duration: "22 hours"
        }
    ];

    // Filter and sort courses
    const filteredCourses = allCourses.filter((course) => {
        const categoryMatch = selectedCategory === 'all' || course.category.toLowerCase() === selectedCategory;
        const levelMatch = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel;
        const searchMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && levelMatch && searchMatch;
    });

    // Sorting
    let sortedCourses = [...filteredCourses];
    if (sortBy === 'popular') {
        sortedCourses.sort((a, b) => b.students - a.students);
    } else if (sortBy === 'rating') {
        sortedCourses.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
        sortedCourses.reverse();
    }

    // Pagination
    const coursesPerPage = viewType === 'grid' ? 9 : 10;
    const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
    const startIndex = (currentPage - 1) * coursesPerPage;
    const paginatedCourses = sortedCourses.slice(startIndex, startIndex + coursesPerPage);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        All Courses
                    </h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Browse our comprehensive collection of {allCourses.length} courses taught by industry experts.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search courses by title or instructor..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full px-6 py-4 pl-12 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all shadow-lg shadow-gray-900/5"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar - Filters */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-6">
                            {/* Categories Filter */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                                <div className="space-y-3">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setSelectedCategory(category.id);
                                                setCurrentPage(1);
                                            }}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${selectedCategory === category.id
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/40'
                                                : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                                                }`}
                                        >
                                            <span className="font-medium">{category.name}</span>
                                            <span className={`text-sm ${selectedCategory === category.id ? 'text-white' : 'text-gray-600'}`}>
                                                ({category.count})
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Level Filter */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Skill Level</h3>
                                <div className="space-y-3">
                                    {levels.map((level) => (
                                        <button
                                            key={level.id}
                                            onClick={() => {
                                                setSelectedLevel(level.id);
                                                setCurrentPage(1);
                                            }}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${selectedLevel === level.id
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/40'
                                                : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                                                }`}
                                        >
                                            <span className="font-medium">{level.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Price Range</h3>
                                <div className="space-y-3">
                                    {priceRanges.map((range) => (
                                        <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="radio" name="price" defaultChecked={range.id === 'all'} className="w-4 h-4" />
                                            <span className="text-gray-900 group-hover:text-blue-600 transition-colors">{range.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        {/* Toolbar */}
                        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-xl border border-gray-200 p-4">
                            <div className="text-gray-600">
                                <p className="text-sm">
                                    Showing <span className="font-bold text-gray-900">{paginatedCourses.length}</span> of <span className="font-bold text-gray-900">{sortedCourses.length}</span> courses
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                {/* Sort Dropdown */}
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => {
                                            setSortBy(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className="appearance-none px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 font-medium focus:outline-none focus:border-blue-500 cursor-pointer pr-10"
                                    >
                                        <option value="popular">Most Popular</option>
                                        <option value="rating">Highest Rated</option>
                                        <option value="newest">Newest First</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>

                                {/* View Type Toggle */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setViewType('grid')}
                                        className={`p-2 rounded-lg transition-all duration-300 ${viewType === 'grid'
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Grid3x3 className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewType('list')}
                                        className={`p-2 rounded-lg transition-all duration-300 ${viewType === 'list'
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <List className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Courses Display */}
                        {viewType === 'grid' ? (
                            // Grid View
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {paginatedCourses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                                    >
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                                            <div style={{ backgroundImage: course.image }} className="w-full h-full group-hover:scale-110 transition-transform duration-300 opacity-80"></div>
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                                                {course.category}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col h-full">
                                            <h3 className="font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                                                {course.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-4">
                                                By <span className="font-semibold">{course.instructor}</span>
                                            </p>

                                            {/* Rating and Students */}
                                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="font-semibold">{course.rating}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users className="w-4 h-4 text-blue-600" />
                                                    <span>{(course.students / 1000).toFixed(1)}K</span>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-lg font-bold text-gray-900">{course.price}</span>
                                                <button className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:scale-110 transition-transform">
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // List View
                            <div className="space-y-4 mb-12">
                                {paginatedCourses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex gap-6"
                                    >
                                        {/* Image */}
                                        <div className="hidden sm:block flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                                            <div style={{ backgroundImage: course.image }} className="w-full h-full group-hover:scale-110 transition-transform duration-300 opacity-80"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors mb-1">
                                                        {course.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600">
                                                        By <span className="font-semibold">{course.instructor}</span>
                                                    </p>
                                                </div>
                                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold whitespace-nowrap ml-4">
                                                    {course.level}
                                                </span>
                                            </div>

                                            {/* Meta Info */}
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    <span>{course.rating}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users className="w-4 h-4 text-blue-600" />
                                                    <span>{(course.students / 1000).toFixed(1)}K students</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4 text-blue-600" />
                                                    <span>{course.duration}</span>
                                                </div>
                                            </div>

                                            {/* Price and CTA */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg font-bold text-gray-900">{course.price}</span>
                                                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/40 transition-all">
                                                    Enroll Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    Previous
                                </button>

                                <div className="flex gap-2">
                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${currentPage === i + 1
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/40'
                                                : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    Next
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;

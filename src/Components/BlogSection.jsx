import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const BlogSection = () => {
    const articles = [
        {
            id: 1,
            title: "10 Tips to Accelerate Your Coding Skills in 2024",
            excerpt: "Discover proven strategies to improve your programming abilities and become a better developer. Learn from industry experts...",
            author: "Sarah Johnson",
            date: "Dec 20, 2024",
            image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            category: "Development",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Design Trends That Will Dominate in 2025",
            excerpt: "Explore the latest design trends, from minimalism to bold typography. Stay ahead of the curve with these emerging styles...",
            author: "Mike Chen",
            date: "Dec 19, 2024",
            image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            category: "Design",
            readTime: "7 min read"
        },
        {
            id: 3,
            title: "Career Transition Guide: From Traditional to Tech",
            excerpt: "Planning a career change? This comprehensive guide will help you navigate the transition to a tech career successfully...",
            author: "Emma Wilson",
            date: "Dec 18, 2024",
            image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            category: "Career",
            readTime: "8 min read"
        },
        {
            id: 4,
            title: "The Future of Remote Learning and Education",
            excerpt: "How online education is reshaping the learning landscape. Insights into hybrid learning, AI integration, and student outcomes...",
            author: "David Kumar",
            date: "Dec 17, 2024",
            image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            category: "Education",
            readTime: "6 min read"
        },
        {
            id: 5,
            title: "Mastering Project Management for Remote Teams",
            excerpt: "Effective strategies and tools for managing projects and teams in a distributed environment. Boost productivity and collaboration...",
            author: "Lisa Anderson",
            date: "Dec 16, 2024",
            image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            category: "Management",
            readTime: "9 min read"
        },
        {
            id: 6,
            title: "Building Your Personal Brand as a Freelancer",
            excerpt: "Strategies to establish yourself as a recognized freelancer in your industry. Create a strong online presence and attract clients...",
            author: "James Mitchell",
            date: "Dec 15, 2024",
            image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
            category: "Freelancing",
            readTime: "10 min read"
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
                            LATEST UPDATES
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Latest Articles & Blog
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl">
                            Stay updated with the latest trends, tips, and insights from our community of educators and industry experts.
                        </p>
                    </div>

                    <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/40 whitespace-nowrap">
                        All Articles
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                                <div style={{ backgroundImage: article.image }} className="w-full h-full group-hover:scale-110 transition-transform duration-300 opacity-80"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                                    {article.category}
                                </div>

                                {/* Read Time Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                                    {article.readTime}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 flex flex-col h-full">
                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 text-sm sm:text-base mb-6 line-clamp-2 flex-grow">
                                    {article.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex flex-col gap-4 pt-6 border-t border-gray-200">
                                    {/* Author and Date */}
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                                                {article.author.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm text-gray-900">{article.author}</p>
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{article.date}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="group/btn p-2 rounded-lg bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110">
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;

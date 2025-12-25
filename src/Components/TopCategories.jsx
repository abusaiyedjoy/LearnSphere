
import { ArrowRight, Palette, Code, PenTool, BarChart3, Music, Camera } from 'lucide-react';

const TopCategories = () => {
    const categories = [
        {
            id: 1,
            name: "Web Design",
            icon: Palette,
            courses: 48,
            color: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            name: "Development",
            icon: Code,
            courses: 124,
            color: "from-purple-500 to-purple-600"
        },
        {
            id: 3,
            name: "Graphic Design",
            icon: PenTool,
            courses: 38,
            color: "from-pink-500 to-pink-600"
        },
        {
            id: 4,
            name: "Business",
            icon: BarChart3,
            courses: 67,
            color: "from-green-500 to-green-600"
        },
        {
            id: 5,
            name: "Music",
            icon: Music,
            courses: 32,
            color: "from-red-500 to-red-600"
        },
        {
            id: 6,
            name: "Photography",
            icon: Camera,
            courses: 45,
            color: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
                            EXPLORE CATEGORIES
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Top Course Categories
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl">
                            Discover our most popular course categories and start learning from industry experts.
                        </p>
                    </div>

                    <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/40 whitespace-nowrap">
                        All Categories
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={category.id}
                                className="group relative overflow-hidden bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <IconComponent className="w-8 h-8" />

                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {category.name}
                                    </h3>

                                    <p className="text-gray-600 mb-6 flex-grow">
                                        {category.courses} Courses Available
                                    </p>

                                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                                        Explore
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="absolute inset-0 border-2 border-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TopCategories;

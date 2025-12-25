

const FilterSidebar = ({ selectedCategory, selectedLevel, onCategoryChange, onLevelChange }) => {
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

    return (
        <div className="sticky top-32 space-y-6">
            {/* Categories Filter */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg shadow-gray-900/5 hover:border-blue-300 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-400 rounded"></div>
                    Categories
                </h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => onCategoryChange(category.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between font-medium text-sm ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/40'
                                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100 hover:text-blue-600'
                                }`}
                        >
                            <span>{category.name}</span>
                            <span className={`text-xs font-semibold ${selectedCategory === category.id ? 'text-white' : 'text-gray-600'}`}>
                                {category.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Level Filter */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg shadow-gray-900/5 hover:border-blue-300 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-purple-400 rounded"></div>
                    Skill Level
                </h3>
                <div className="space-y-2">
                    {levels.map((level) => (
                        <button
                            key={level.id}
                            onClick={() => onLevelChange(level.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm ${selectedLevel === level.id
                                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-600/40'
                                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100 hover:text-purple-600'
                                }`}
                        >
                            {level.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg shadow-gray-900/5 hover:border-blue-300 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-green-400 rounded"></div>
                    Price Range
                </h3>
                <div className="space-y-3">
                    {priceRanges.map((range) => (
                        <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="radio"
                                name="price"
                                defaultChecked={range.id === 'all'}
                                className="w-4 h-4 accent-green-600 cursor-pointer"
                            />
                            <span className="text-gray-900 group-hover:text-green-600 transition-colors font-medium text-sm">
                                {range.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Clear Filters Button */}
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/40 transition-all duration-300 text-sm">
                Clear All Filters
            </button>
        </div>
    );
};

export default FilterSidebar;

import { useNavigate } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight, TrendingUp, Award, Target } from 'lucide-react';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();
    return (
        <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
            <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 flex items-start justify-between p-4">
                    <div className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600 shadow-lg">
                        {course.category}
                    </div>

                    <div className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${course.level === 'Beginner' ? 'bg-green-100/95 text-green-700' :
                        course.level === 'Intermediate' ? 'bg-yellow-100/95 text-yellow-700' :
                            'bg-red-100/95 text-red-700'
                        } backdrop-blur-sm`}>
                        {course.level}
                    </div>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-900">{course.rating}</span>
                    </div>
                    <span className="text-xs text-gray-600">({course.reviews.toLocaleString()})</span>
                </div>

                {course.students > 10000 && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 bg-orange-500/95 backdrop-blur-sm rounded-full text-white text-xs font-bold shadow-lg">
                        <TrendingUp className="w-3 h-3" /> Trending
                    </div>
                )}
            </div>

            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                    By <span className="font-semibold text-gray-900">{course.instructor}</span>
                </p>

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

                <div className="flex items-center justify-between mt-auto gap-4">
                    <div>
                        <p className="text-xs text-gray-600 mb-1">Price</p>
                        <p className={`text-xl font-bold ${course.isFree ? 'text-green-600' : 'text-gray-900'}`}>
                            {course.price}
                        </p>
                    </div>

                    <button
                        onClick={() => navigate(`/course/${course.id}`)}
                        className="group/btn flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-600/40 transition-all duration-300 hover:scale-110 flex items-center justify-center border border-blue-500/50 hover:border-blue-400">
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>

                <p className="text-xs text-blue-600 font-medium mt-3 text-center group-hover:text-blue-700 transition-colors cursor-pointer" onClick={() => navigate(`/course/${course.id}`)}>
                    Explore Now →
                </p>
            </div>
        </div>
    );
};

export default CourseCard;

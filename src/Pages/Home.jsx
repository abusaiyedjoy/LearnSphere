

import Banner from '../Components/Banner';
import TopCategories from '../Components/TopCategories';
import FeaturedCourses from '../Components/FeaturedCourses';
import HighlightSection from '../Components/HighlightSection';
import Testimonials from '../Components/Testimonials';
import CTASection from '../Components/CTASection';
import BlogSection from '../Components/BlogSection';

const Home = () => {
    return (
        <div className="home-container">
            <Banner />
            <TopCategories />
            <FeaturedCourses />
            <HighlightSection />
            <Testimonials />
            <CTASection />
            <BlogSection />
        </div>
    );
};

export default Home;
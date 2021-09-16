import React from 'react';
import Footer from '../../Reuse/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <Blogs />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
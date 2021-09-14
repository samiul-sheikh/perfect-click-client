import React from 'react';
import Footer from '../../Reuse/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Blogs />
            <Testimonials/>
            <Footer />
        </div>
    );
};

export default Home;
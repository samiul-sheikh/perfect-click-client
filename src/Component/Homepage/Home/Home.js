import React from 'react';
import Footer from '../../Reuse/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;
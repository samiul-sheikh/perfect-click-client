import React from 'react';
import Footer from '../../Reuse/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Services />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;
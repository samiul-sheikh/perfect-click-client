import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="container">
                    <div className="sec aboutus">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <ul className="sci">
                            <li><a href="www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="imageGallery">Image Gallery</a></li>
                            <li><a href="blog">Our Blog</a></li>
                            <li><a href="contact">Contact Us</a></li>
                            <li><a href="about">About Us</a></li>
                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>Category</h2>
                        <ul>
                            <li><a href="services">Basic Package</a></li>
                            <li><a href="standard">Standard Package</a></li>
                            <li><a href="luxury">Luxury Package</a></li>
                            <li><a href="premium">Premium Package</a></li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2>Contact Us</h2>
                        <ul className="info">
                            <li>
                                <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                <span>ABC Tower<br />
                                    Banani, Dhaka, Bangladesh</span>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                <p><a href="mobile:+8801784097404">+88 01784097404</a></p>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <p><a href="email:perfectclick@gmail.com">perfectclick@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyrightText">
                <p>Copyright @2021 Perfect Click. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
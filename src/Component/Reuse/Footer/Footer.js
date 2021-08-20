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
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Photo Gallery</a></li>
                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>Category</h2>
                        <ul>
                            <li><a href="#">Portrait</a></li>
                            <li><a href="#">Bride</a></li>
                            <li><a href="#">Outdoor</a></li>
                            <li><a href="#">Indoor</a></li>
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
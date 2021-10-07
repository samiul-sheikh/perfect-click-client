import React from 'react';
import image1 from '../../../images/image1.png';
import image2 from '../../../images/image2.png';
import image3 from '../../../images/image3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Photographers.css';

const Photographers = () => {
    return (
        <section id="team">
            <div className="container my-3 py-5 text-center">
                <div className="row mb-5">
                    <div className="col">
                        <h2>Our Team</h2>
                        <p className="mt-3">Here some of our team members</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={image1} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                                <h3>Samiul Sheikh</h3>
                                <h5>Senior Photographer</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.</p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    </div>
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    </div>
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={image2} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                                <h3>Samiul Sheikh</h3>
                                <h5>Senior Photographer</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.</p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    </div>
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    </div>
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={image3} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                                <h3>Samiul Sheikh</h3>
                                <h5>Senior Photographer</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.</p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    </div>
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    </div>
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={image1} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                                <h3>Samiul Sheikh</h3>
                                <h5>Senior Photographer</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.</p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    </div>
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    </div>
                                    <div className="p-4">
                                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Photographers;
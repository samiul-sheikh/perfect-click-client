import React from 'react';
import bg1 from '../../../images/banner-images/bg1.jpg';
import bg2 from '../../../images/banner-images/bg2.jpg';
import bg3 from '../../../images/banner-images/bg3.jpg';
import v1 from '../../../images/vector-img/v1.jpg';
import v2 from '../../../images/vector-img/v2.jpg';
import v3 from '../../../images/vector-img/v3.jpg';

import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide panda-slide mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex align-items-center p-5">
                            <div className="col-md-7">
                                <h1>Memories Worth Cherishing</h1>
                                <p>Create the memories & celebrate the magic with Perfect Click</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                            <div className="col-md-5 mt-3">
                                <img src={v1} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex align-items-center p-5">
                            <div className="col-md-7">
                                <h1>Modern and Natural</h1>
                                <p>We are interested in the details about your wedding, your ceremony & reception venues, your vision, your dress, your colours and anything else you would like to share with us. We a Gold Coast and Brisbane.
                                </p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                            <div className="col-md-5 mt-3">
                                <img src={v2} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex align-items-center p-5">
                            <div className="col-md-7">
                                <h1>Elegance in every details</h1>
                                <p>We are interested in the details about your wedding, your ceremony & reception venues, your vision, your dress, your colours and anything else you would like to share with us. We a Gold Coast and Brisbane.
                                </p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                            <div className="col-md-5 mt-3">
                                <img src={v3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Header;
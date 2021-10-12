import React from 'react';
import feature from '../../../images/vector-img/v5.jpg'
// import feature from '../../../images/i/i2.jpg'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-0 m-md-0">
                        <img className="img-fluid" src={feature} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center p-5">
                        <h1>Exceptional PhotoShoot, on your Term</h1>
                        <p className="text-secondary my-3">
                            Perfect Click is a full-service wedding and special event planning company with takes care of your floral, design and logistics needs. Our office is located in Dhaka Bangladesh. Our goal, besides ensuring a flawless and magical event for you, is to make your planning
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;
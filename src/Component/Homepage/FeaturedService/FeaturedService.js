import React from 'react';
import feature from '../../../images/vector-img/v5.jpg'
// import feature from '../../../images/i/i2.jpg'

const FeaturedService = () => {
    return (
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src={feature} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center p-5">
                        <h1>Exceptional Photoshoot,<br></br>On your term</h1>
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
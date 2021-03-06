import React from 'react';

const Testimonial = ({ testimonial }) => {

    const { name, information, description,  image } = testimonial;

    return (
        <div className="col-lg-4 col-md-6 card shadow-sm p-5 my-3">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={image} alt="" width="60"/>
                <div>
                    <h5 className="text-primary">{name}</h5>
                    <p className="m-0">{information}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
       </div>
    );
};

export default Testimonial;
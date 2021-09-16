import React from 'react';

const Testimonial = ({ testimonial }) => {

    const { name, information, description,  image } = testimonial;

    return (
        <div className="col-md-4 card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={image} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
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
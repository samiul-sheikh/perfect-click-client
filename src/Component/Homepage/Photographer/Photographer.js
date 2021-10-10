import React from 'react';

const Photographer = ({ photographer }) => {

    const { name, title, image, facebook, twitter, instagram } = photographer;
    
    return (
        <div className="col-lg-3 col-md-6">
            <div className="card my-4">
                <div className="card-body">
                    <img src={image} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                    <h3>{name}</h3>
                    <h6>{title}</h6>
                    <p>{photographer.about}</p>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="p-4">
                            <a href="#">{facebook}</a>
                        </div>
                        <div className="p-4">
                            <a href="#">{twitter}</a>
                        </div>
                        <div className="p-4">
                            <a href="#">{instagram}</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photographer;
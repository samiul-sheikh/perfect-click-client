import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-3 text-center py-3">
            <div className="card" style={{ width: '18rem' }}>
                <img src={service.imageURL} className="card-img-top cover" alt="..." style={{ height: '250px' }} />
                <div class="card-body">
                    <h5 className="card-title">{service.name}</h5> <br />
                    <div className="d-flex justify-content-between">
                        <button type="button" class="btn btn-primary">View More</button>
                        <button type="button" class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
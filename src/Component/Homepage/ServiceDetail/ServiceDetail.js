import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {

    const history = useHistory();

    const serviceInfo = id => {
        const url = `/service/${id}`;
        history.push(url);
    }

    const handleService = id => {
        const url = `/checkout/${id}`;
        history.push(url);
    }

    return (
        <div className="col-lg-3 col-md-6 py-3">
            <div className="card border-0 bg-light service-card">
                <img src={service.imageURL} alt="" className="img-fluid" />
                <div className="card-body mt-3">
                    <h3 className="card-title">{service.name}</h3>
                    <div className="d-flex justify-content-between mt-3">
                        <button onClick={() => serviceInfo(service._id)} type="button" className="btn btn-outline-primary">View More</button>
                        <button onClick={() => handleService(service._id)} type="button" className="btn btn-outline-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
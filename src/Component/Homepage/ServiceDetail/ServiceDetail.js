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
        <div className="col-lg-3 col-md-6 text-center p-5">
            <div className="card border-0 bg-light service-card">
                <img src={service.imageURL} className="img-fluid mb-2" alt="..." style={{ height: '250px' }} />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <div className="d-flex justify-content-between mt-3">
                        <button onClick={() => serviceInfo(service._id)} type="button" className="btn btn-outline-primary">view more</button>
                        <button onClick={() => handleService(service._id)} type="button" className="btn btn-outline-primary">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
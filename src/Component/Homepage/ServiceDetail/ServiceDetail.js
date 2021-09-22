import React from 'react';
import { useHistory } from 'react-router-dom';

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
        <div className="col-md-3 text-center p-5">
            <div className="card border-0 bg-light" style={{ width: '18rem' }}>
                <img src={service.imageURL} className="card-img-top" alt="..." style={{ height: '250px' }} />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <div className="d-flex justify-content-between mt-3">
                        <button onClick={() => serviceInfo(service._id)} type="button" className="btn btn-primary">view more</button>
                        <button onClick={() => handleService(service._id)} type="button" className="btn btn-primary">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
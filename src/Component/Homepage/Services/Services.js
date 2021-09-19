import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const [services, setServices] = useState([]);

    // display all services from server
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="container mt-5">
            <div className="text-center text-primary">
                <h2>Our service</h2>
                <h5>The great services we provide</h5>
            </div>
            <div className="row mt-3">
                {
                    services.length === 0 && <div class="spinner-border text-info mx-auto my-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;
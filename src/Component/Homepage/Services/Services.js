import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const [services, setServices] = useState([]);

    // display all services from server
    useEffect(() => {
        fetch('https://shrouded-oasis-00377.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="services mt-5">
            <div className="container">
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
            </div>
        </section>
    );
};

export default Services;
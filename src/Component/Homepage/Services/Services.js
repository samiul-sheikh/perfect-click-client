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
        // <section className="services mt-5">
        //     <div className="container justify-content-center">
        //         <div className="section-header text-center text-primary">
        //             <h2>Our service</h2>
        //             <h5>The great services we provide</h5>
        //         </div>
        <section className="mt-5">
            <div className="container my-3 py-5 text-center">
                <div className="row mb-5">
                    <div className="col text-primary">
                        <h2>Our service</h2>
                        <h5>The great services we provide</h5>
                    </div>
                </div>
                <div className="row">
                    {
                        services.length === 0 && <div class="spinner-border text-primary mx-auto my-auto" role="status">
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
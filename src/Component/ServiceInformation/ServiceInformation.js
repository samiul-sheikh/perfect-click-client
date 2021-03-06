import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceInformation = () => {

    const { id } = useParams();

    const [serviceInfo, setServiceInfo] = useState({});

    useEffect(() => {
        fetch('https://shrouded-oasis-00377.herokuapp.com/service/' + id)
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [id])

    return (
        <section className=" mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img src={serviceInfo.imageURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h1>Name: {serviceInfo.name}</h1>
                        <h3>Price: {serviceInfo.price}</h3>
                        <h5>Details: {serviceInfo.description}</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceInformation;
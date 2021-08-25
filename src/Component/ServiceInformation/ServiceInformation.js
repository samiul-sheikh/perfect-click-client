import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceInformation = () => {

    const { id } = useParams();
    console.log(id);

    const [serviceInfo, setServiceInfo] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/service/' + id)
            .then(res => res.json())
            .then(data => setServiceInfo(data))
            // console.log(serviceInfo);
    }, [id])

    return (
        <div className="text-center">
            <h2>Service Information</h2>
            <img src={serviceInfo.imageURL} alt="" />
            <h5>{serviceInfo.name}</h5>
            <p>{serviceInfo.price}</p>
        </div>
    );
};

export default ServiceInformation;
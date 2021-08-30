import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {

    const { id } = useParams();

    const [checkoutService, setCheckoutService] = useState({ });

    useEffect(() => {
        fetch('http://localhost:5000/service/' + id)
            .then(res => res.json())
            .then(data => setCheckoutService(data))
    }, [id]);


    return (

        <div style={{ textAlign: 'center' }}>
            <h1>This is Checkout Page</h1>
            <img src={checkoutService.imageURL} alt="" />
            <p>{checkoutService.name}</p>
            <p>{checkoutService.price}</p>
            <button type="button" class="btn btn-success">Place Order</button>
        </div>
    );
};

export default CheckOut;
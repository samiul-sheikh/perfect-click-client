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

    // store checkOut service information in server
    const handleOrder = () => {
        const newOrder = { ...checkoutService }
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (

        <div style={{ textAlign: 'center' }}>
            <h1>This is Checkout Page</h1>
            <img src={checkoutService.imageURL} alt="" />
            <p>{checkoutService.name}</p>
            <p>{checkoutService.price}</p>
            <button onClick={handleOrder} type="button" className="btn btn-success">Place Order</button>
        </div>
    );
};

export default CheckOut;
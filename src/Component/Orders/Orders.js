import React, { useState, useEffect } from 'react';

const Orders = () => {

    const [orders, setOrders] = useState([]);

    // display all ordered services for admin
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <h3>You place: {orders.length} orders</h3>
            {
                orders.map(order => <li> service : {order.name} price: {order.price} </li>)
            }
        </div>
    );
};

export default Orders;
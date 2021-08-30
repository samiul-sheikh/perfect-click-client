import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Orders = () => {

    const [orders, setOrders] = useState([]);

    // display all ordered services for admin
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h5 className="text-center">Total Order place: {orders.length} package</h5>
                {
                    orders.map(order => <li> service : {order.name} price: {order.price} </li>)
                }
            </div>
        </section>

    );
};

export default Orders;
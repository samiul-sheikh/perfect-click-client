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

    const orderList = () => {
        return (
            orders.map(order => {
                return (
                    <React.Fragment>
                        <tbody>
                            <td>{order.name} </td>
                            <td>{order.email}</td>
                            <td>{order.service}</td>
                            <td>{order.price}</td>
                            <td className="text-danger">{order.status}</td>
                        </tbody>
                    </React.Fragment>
                )
            })
        )
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h3>Order List</h3>
                <p className="text-center">Total order placed: {orders.length} package</p>
                <table className="table w-100">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Status</th>
                    </thead>
                    {
                        orderList()
                    }
                </table>
            </div>
        </section>
    );
};

export default Orders;
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const OrderList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    // display all ordered services for specific user
    useEffect(() => {
        fetch('https://shrouded-oasis-00377.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h3>Order List</h3>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr>
                                <td>{order.name} </td>
                                <td>{order.email}</td>
                                <td>{order.service}</td>
                                <td>{order.price}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                                <td className="text-danger">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OrderList;

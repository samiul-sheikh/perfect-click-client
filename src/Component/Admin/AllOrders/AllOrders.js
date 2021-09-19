import { useEffect, useState } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    // display all ordered services for admin
    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data))
    }, []);

    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h3>All Order List</h3>
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((orders) => (
                            <tr>
                                <td>{orders.name} </td>
                                <td>{orders.email}</td>
                                <td>{orders.service}</td>
                                <td>{orders.price}</td>
                                <td className="text-danger">{orders.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllOrders;

import { useEffect, useState } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    // display all ordered services for admin
    useEffect(() => {
        fetch("https://shrouded-oasis-00377.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data))
    }, []);

    const [status, setStatus] = useState(orders.status)
    const handleStatus = (e) => {
        setStatus(e.target.value)
        const newOrder = { status: e.target.value, id: orders._id }
        fetch('https://shrouded-oasis-00377.herokuapp.com/updateStatus', {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

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
                                <td>
                                    <select onChange={handleStatus} name="status" id="status" defaultValue={status}>
                                        <option className="text-danger" value="Pending">Pending</option>
                                        <option className="tex-warning" value="Ongoing">Ongoing</option>
                                        <option className="text-success" value="Done">Done</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllOrders;

import { useEffect, useState } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://shrouded-oasis-00377.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    // delete services from server and homepage
    const handleDelete = (id) => {
        fetch('https://shrouded-oasis-00377.herokuapp.com/delete/' + id, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    const remainServices = services.filter(
                        (services) => services._id !== id
                    );
                    setServices(remainServices);
                    swal("Yes!", "Service Deleted Successfully!", "success");
                }
            });
    };

    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h3>Manage Service</h3>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr>
                                <td>{service.name}</td>
                                <td>${service.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(`${service._id}`)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageServices;

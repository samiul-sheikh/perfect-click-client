import { useEffect, useState } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";

const AdminList = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch("https://shrouded-oasis-00377.herokuapp.com/admins")
            .then((res) => res.json())
            .then((data) => setAdmins(data));
    }, []);

    // delete admin from admin list
    const handleDelete = (id) => {
        fetch('https://shrouded-oasis-00377.herokuapp.com/deleteAdmin/' + id, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    const remainAdmins = admins.filter(
                        (admins) => admins._id !== id
                    );
                    setAdmins(remainAdmins);
                    swal("Yes!", "Admin Deleted Successfully!", "success");
                }
            });
    };

    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h3>Admin List</h3>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">E-mail Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admins) => (
                            <tr>
                                <td>{admins.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(`${admins._id}`)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AdminList;

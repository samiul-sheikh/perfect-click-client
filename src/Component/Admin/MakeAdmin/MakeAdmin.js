import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import swal from "sweetalert";

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        // new admin information store in server
        fetch("http://localhost:5000/makeAdmin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    swal("Congrats!", "We Make this email an admin", "success");
                }
            });
        e.preventDefault();
    };
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h3>Make Admin</h3>
                <div className="w-50 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label for="exampleInputEmail" className="form-label">Email Address</label>
                            <input type="text" ref={register({ required: true })} name="email" placeholder="name@example.com" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group d-grid mx-auto">
                            <button type="submit" className="btn btn-primary">Make Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;

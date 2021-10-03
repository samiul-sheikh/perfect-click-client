import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import swal from "sweetalert";
import Sidebar from '../Sidebar/Sidebar';

const CheckOut = () => {

    const { register, handleSubmit, errors } = useForm();

    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkoutService, setCheckoutService] = useState({});

    useEffect(() => {
        fetch('https://shrouded-oasis-00377.herokuapp.com/service/' + id)
            .then(res => res.json())
            .then(data => setCheckoutService(data))
    }, [id]);

    const onSubmit = data => {

        const newOrder = {
            ...loggedInUser,
            service: data.service,
            price: data.price,
            phone: data.phone,
            address: data.address,
            status: "Pending"
        }
        // store checkOut service information in server
        fetch('https://shrouded-oasis-00377.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    swal("YAY!", "You Ordered this Service!", "success");
                    // alert('your order is placed successfully!');
                }
            });
    };

    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h3>Checkout Service</h3>
                <p className="text-center">Please enter your information...</p>
                <div className="w-50 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label for="exampleInputName" className="form-label">Your Name</label>
                            <input type="text" ref={register({ required: true })} name="name" defaultValue={loggedInUser.name} placeholder="enter your name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleInputEmail" className="form-label">Your Email</label>
                            <input type="text" ref={register({ required: true })} name="email" defaultValue={loggedInUser.email} placeholder="enter your e-mail" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleInputService" className="form-label">Service Name</label>
                            <input type="text" ref={register({ required: true })} name="service" defaultValue={checkoutService.name} placeholder="enter service name" className="form-control" />
                            {errors.service && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleInputDescription" className="form-label">Service Price</label>
                            <input type="text" ref={register({ required: true })} name="price" defaultValue={checkoutService.price} placeholder="enter service price" className="form-control" />
                            {errors.price && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleInputPhone" className="form-label">Phone Number</label>
                            <input type="text" ref={register({ required: true })} name="phone" placeholder="enter your phone no" className="form-control" />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleInputAddress" className="form-label">Your Address</label>
                            <input type="text" ref={register({ required: true })} name="address" placeholder="enter your address" className="form-control" />
                            {errors.address && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group d-grid mx-auto">
                            <button type="submit" className="btn btn-primary">Place Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CheckOut;
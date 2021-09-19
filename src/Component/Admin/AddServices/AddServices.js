import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import swal from "sweetalert";

const AddServices = () => {

    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = service => {
        console.log(service.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b8a0776f79e4a37c3c341318f0f61e22');
        imageData.append('image', service.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        const {name, description, price} = data;

        const serviceData = {
            name: name,
            description: description,
            price: price,
            imageURL: imageURL
        };

        console.log(serviceData)

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then((res) => res.json())
            .then((result) => {
                if (result && imageURL) {
                    swal("Congratulations!", "Service added successfully!", "success");
                }
            });
    };

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h3>Add Service</h3>
                <p className="text-center">Add new service here</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputService" className="form-label">Service Title</label>
                        <input type="text" ref={register({ required: true })} name="name" placeholder="enter title" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputService" className="form-label">Service Description</label>
                        <input type="text" ref={register({ required: true })} name="description" placeholder="enter description" className="form-control" />
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputPrice" className="form-label">Service Price</label>
                        <input type="text" ref={register({ required: true })} name="price" placeholder="enter price" className="form-control" />
                        {errors.price && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputImage" className="form-label">Service Image</label>
                        <input onChange={handleImageUpload} type="file" ref={register({ required: true })} name="image" placeholder="Upload an Image" className="form-control" />
                        {errors.image && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group d-grid mx-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddServices;
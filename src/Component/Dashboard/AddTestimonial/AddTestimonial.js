import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddTestimonial = () => {

    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {

        const testimonialData = {
            name: data.name,
            information: data.information,
            description: data.description,
            image: imageURL
        };

        const url = `http://localhost:5000/addTestimonial`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
            .then(res => console.log('server side res ', res))
    };

    const handleImageUpload = testimonial => {
        console.log(testimonial.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b8a0776f79e4a37c3c341318f0f61e22')
        imageData.append('image', testimonial.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h3>Testimonial</h3>
                <p className="text-center">Tell something about us...</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputTestimonial" className="form-label">Your Name</label>
                        <input type="text" ref={register({ required: true })} name="name" placeholder="enter your name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputInformation" className="form-label">Company's Information</label>
                        <input type="text" ref={register({ required: true })} name="information" placeholder="company's name, designation" className="form-control" />
                        {errors.information && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputDescription" className="form-label">Enter Description</label>
                        <input type="text" ref={register({ required: true })} name="description" placeholder="tell something about us" className="form-control" />
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputImage" className="form-label">Your Image</label>
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

export default AddTestimonial;
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {

    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {

        const reviewData = {
            name: data.name,
            information: data.information,
            description: data.description,
            image: imageURL
        };

        const url = `http://localhost:5000/addReview`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side res ', res))
    };

    const handleImageUpload = review => {
        console.log(review.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b8a0776f79e4a37c3c341318f0f61e22')
        imageData.append('image', review.target.files[0]);

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
                <h5 className="text-center">Add Your Review Here</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputReview" class="form-label">Your Name</label>
                        <input type="text" ref={register({ required: true })} name="name" placeholder="enter your name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputInformation" class="form-label">Company's Information</label>
                        <input type="text" ref={register({ required: true })} name="information" placeholder="company's name, designation" className="form-control" />
                        {errors.information && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputDescription" class="form-label">Enter Description</label>
                        <input type="text" ref={register({ required: true })} name="description" placeholder="tell something about us" className="form-control" />
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputImage" class="form-label">Your Image</label>
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

export default AddReview;
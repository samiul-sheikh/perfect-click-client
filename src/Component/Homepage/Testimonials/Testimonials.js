import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://shrouded-oasis-00377.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="testimonials">
            <div className="container text-center">
                <div className="row mb-3">
                    <div className="col text-primary">
                        <h2>Testimonials</h2>
                        <h5>Happy client says about us</h5>
                    </div>
                </div>
                <div className="row">
                    {
                        testimonials.length === 0 && <div class="spinner-border text-primary mx-auto my-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
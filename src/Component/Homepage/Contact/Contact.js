import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact-us my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h2 className="text-primary">Contact US</h2>
                    <h5>always connect with us</h5>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="https://formspree.io/f/xzbydgoq" method="POST">
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="enter your name" required />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="email" placeholder="enter e-mail address" required/>
                        </div>
                        <div className="form-group mt-3">
                            <textarea type="text" name="message" className="form-control" cols="30" rows="10" placeholder="write message" required></textarea>
                        </div>
                        <div className="form-group text-center mt-4">
                            <button type="submit" className="btn btn-primary"> Submit Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
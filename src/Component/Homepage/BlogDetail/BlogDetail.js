import React from 'react';
import './BlogDetail.css';

const BlogDetail = ({ blog }) => {

    const { image, name, details } = blog;
    
    return (
        <div className="col-lg-3 col-md-6">
            <div className="card border-0 bg-light blog-card">
                <div className="card-body">
                    <img src={image} alt="" className="img-fluid mb-3" />
                    <h3>{name}</h3>
                    <p>{details}</p>
                    <button type="button" className="btn btn-link">See More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
import React from 'react';

const BlogDetail = ({ blog }) => {
    return (
        <div className="col-md-3 text-center py-3">
            <div className="card" style={{ width: '18rem' }}>
                <img src={blog.image} className="card-img-top cover" alt="..." style={{ height: '250px' }} />
                <div class="card-body">
                    <h5 className="card-title">{blog.name}</h5> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sed harum odio natus veniam?</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
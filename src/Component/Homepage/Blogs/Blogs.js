import React from 'react';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img5 from '../../../images/img5.jpg';
import img4 from '../../../images/img4.jpg';
import BlogDetail from '../BlogDetail/BlogDetail';

const blogData = [
    {
        name: 'Portrait Photography',
        image: img1
    },
    {
        name: 'Bridal Photography',
        image: img2
    },
    {
        name: 'Indoor Photography',
        image: img5
    },
    {
        name: 'Outdoor Photography',
        image: img4
    }
]

const Blogs = () => {
    return (
        <section className="container mt-5">
            <div className="text-center text-primary">
                <h2>Our Blog</h2>
                <h5>Here some of our blogs</h5>
            </div>
            <div className="row mt-3">
                {
                    blogData.map(blog => <BlogDetail blog={blog}></BlogDetail>)
                }
            </div>
        </section>
    );
};

export default Blogs;
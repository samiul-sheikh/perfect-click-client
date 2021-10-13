import React from 'react';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img5 from '../../../images/img55.jpg';
import img4 from '../../../images/img4.jpg';
import BlogDetail from '../BlogDetail/BlogDetail';

const blogData = [
    {
        name: 'Portrait',
        image: img1,
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Bridal',
        image: img2,
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Indoor',
        image: img5,
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Videography',
        image: img4,
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    }
]

const Blogs = () => {
    return (
        <section className="mt-5">
            <div className="container text-center">
                <div className="row mb-5">
                    <div className="col text-primary">
                        <h2>Our Blog</h2>
                        <h5>Here some of our blogs</h5>
                    </div>
                </div>
                <div className="row gy-4">
                    {
                        blogData.map(blog => <BlogDetail blog={blog} key={blog.name}></BlogDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;
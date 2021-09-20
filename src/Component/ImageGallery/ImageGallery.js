import React from 'react';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';
import img9 from '../../images/img9.jpg';
import img10 from '../../images/img10.jpg';
import img11 from '../../images/img11.jpg';
import img12 from '../../images/img12.jpg';

const ImageGallery = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-8"><img src={img7} className="img-fluid" alt="" /></div>
                <div class="col-6 col-md-4"><img src={img6} className="img-fluid" alt="" /></div>
            </div>


            <div class="row mt-5">
                <div class="col-6 col-md-4"><img src={img8} className="img-fluid" alt="" /></div>
                <div class="col-6 col-md-4"><img src={img9} className="img-fluid" alt="" /></div>
                <div class="col-6 col-md-4"><img src={img10} className="img-fluid" alt="" /></div>
            </div>


            <div class="row mt-5">
                <div class="col-6"><img src={img11} className="img-fluid" alt="" /></div>
                <div class="col-6"><img src={img12} className="img-fluid" alt="" /></div>
            </div>
        </div>
    );
};

export default ImageGallery;
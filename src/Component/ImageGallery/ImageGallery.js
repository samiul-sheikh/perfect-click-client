import React from 'react';
import img1 from '../../images/img1.jpg';
import img5 from '../../images/img5.jpg';
import img2 from '../../images/img2.jpg';
import img4 from '../../images/img4.jpg';
import headphone from '../../images/banner-images/headphone.png';
import tv from '../../images/banner-images/tv.png';
import xbox from '../../images/banner-images/xbox.png';

const ImageGallery = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-8"><img src={img1} className="img-fluid" alt="" /></div>
                <div class="col-6 col-md-4"><img src={img5} className="img-fluid" alt="" /></div>
            </div>


            <div class="row mt-5">
                <div class="col-6 col-md-4"><img src={img4} className="img-fluid" alt="" /></div>
                <div class="col-6 col-md-4"><img src={img2} className="img-fluid" alt="" /></div>
                <div class="col-6 col-md-4"><img src={headphone} className="img-fluid" alt="" /></div>
            </div>


            <div class="row mt-5">
                <div class="col-6"><img src={tv} className="img-fluid" alt="" /></div>
                <div class="col-6"><img src={xbox} className="img-fluid" alt="" /></div>
            </div>
        </div>
    );
};

export default ImageGallery;
import React from 'react';
import image1 from '../../../images/sami2.png';
import image2 from '../../../images/sami1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Photographers.css';
import Photographer from '../Photographer/Photographer';
const photographerData = [
    {
        name: 'Samiul Sheikh',
        title: 'Senior Photographer',
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.',
        image: image1,
        facebook: <FontAwesomeIcon icon={faFacebook} />,
        twitter: <FontAwesomeIcon icon={faTwitter} />,
        instagram: <FontAwesomeIcon icon={faInstagram} />
    },
    {
        name: 'Nayeem Sheikh',
        title: 'Junior Photographer',
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.',
        image: image2,
        facebook: <FontAwesomeIcon icon={faFacebook} />,
        twitter: <FontAwesomeIcon icon={faTwitter} />,
        instagram: <FontAwesomeIcon icon={faInstagram} />
    },
    {
        name: 'Pallab Sarker',
        title: 'Junior Photographer',
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.',
        image: image1,
        facebook: <FontAwesomeIcon icon={faFacebook} />,
        twitter: <FontAwesomeIcon icon={faTwitter} />,
        instagram: <FontAwesomeIcon icon={faInstagram} />
    },
    {
        name: 'Forhad Hossain',
        title: 'VideoGrapher',
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.',
        image: image2,
        facebook: <FontAwesomeIcon icon={faFacebook} />,
        twitter: <FontAwesomeIcon icon={faTwitter} />,
        instagram: <FontAwesomeIcon icon={faInstagram} />
    }
]

const Photographers = () => {
    return (
        <section id="team">
            <div className="container my-3 py-5 text-center">
                <div className="row mb-5">
                    <div className="col text-primary">
                        <h2>Our Team</h2>
                        <h5 className="mt-3">some of our photographer team members</h5>
                    </div>
                </div>
                <div className="row">
                    {
                        photographerData.map(photographer => <Photographer photographer={photographer} key={photographer.name}></Photographer>)
                    }
                </div>
            </div>
        </section >
    );
};

export default Photographers;

// const Photographers = () => {
//     return (
//         <section id="team">
//             <div className="container my-3 py-5 text-center">
//                 <div className="row mb-5">
//                     <div className="col">
//                         <h2>Our Team</h2>
//                         <p className="mt-3">Here some of our team members</p>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-3 col-md-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <img src={image1} alt="" className="img-fluid rounded-circle w-50 mb-3" />
//                                 <h3>Samiul Sheikh</h3>
//                                 <h5>Senior Photographer</h5>
//                                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.</p>
//                                 <div className="d-flex flex-row justify-content-center">
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//                                     </div>
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//                                     </div>
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <img src={image2} alt="" className="img-fluid rounded-circle w-50 mb-3" />
//                                 <h3>Nayeem Sheikh</h3>
//                                 <h5>Junior Photographer</h5>
//                                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.</p>
//                                 <div className="d-flex flex-row justify-content-center">
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//                                     </div>
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//                                     </div>
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <img src={image1} alt="" className="img-fluid rounded-circle w-50 mb-3" />
//                                 <h3>Pollob Sarker</h3>
//                                 <h5>Junior Photographer</h5>
//                                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.</p>
//                                 <div className="d-flex flex-row justify-content-center">
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//                                     </div>
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//                                     </div>
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <img src={image2} alt="" className="img-fluid rounded-circle w-50 mb-3" />
//                                 <h3>Forhad Hossain</h3>
//                                 <h5>Videographer</h5>
//                                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, laborum.</p>
//                                 <div className="d-flex flex-row justify-content-center">
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//                                     </div>
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//                                     </div>
//                                     <div className="p-4">
//                                         <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Photographers;
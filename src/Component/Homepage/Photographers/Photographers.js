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
            <div className="container my-3 pb-5 text-center">
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
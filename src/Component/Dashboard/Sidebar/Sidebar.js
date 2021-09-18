import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh", left: "0" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/orders" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCalendar} /> <span> All Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Add Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addService" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/manageServices" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/makeAdmin" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faGripHorizontal, faUserPlus, faCartArrowDown, faUsers, faCommentMedical, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh", left: "0" }}>
            <ul className="list-unstyled">
                {loggedInUser && (<>
                    <li>
                        <Link to="/dashboard" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faCommentMedical} /> <span>Add Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order List</span>
                        </Link>
                    </li>
                </>)}
                {loggedInUser.isAdmin && (<>
                    <li>
                        <Link to="/admin/orders" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faCartArrowDown} /> <span> All Order List</span>
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
                    <li>
                        <Link to="/admin/admins" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faUsers} /> <span>Admin List</span>
                        </Link>
                    </li>
                </>)}
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;
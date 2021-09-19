import { createContext, useState } from 'react';
import './App.css';
import Home from './Component/Homepage/Home/Home';
import Navbar from './Component/Reuse/Navbar/Navbar';
import ImageGallery from './Component/ImageGallery/ImageGallery';
import Login from './Component/Login/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import ServiceInformation from './Component/ServiceInformation/ServiceInformation';
import CheckOut from './Component/Dashboard/CheckOut/CheckOut';
import AdminRoute from './Component/Admin/AdminRoute/AdminRoute';
import AddTestimonial from './Component/Dashboard/AddTestimonial/AddTestimonial';
import OrderList from './Component/Dashboard/OrderList/OrderList';
import AllOrders from './Component/Admin/AllOrders/AllOrders';
import AddServices from './Component/Admin/AddServices/AddServices';
import ManageServices from './Component/Admin/ManageServices/ManageServices';
import MakeAdmin from './Component/Admin/MakeAdmin/MakeAdmin';
import AdminList from './Component/Admin/AdminList/AdminList';
import NoMatch from './Component/NoMatch/NoMatch';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <>
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Navbar></Navbar>
                    <div className="pages">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/imageGallery" component={ImageGallery} />
                            <Route path="/login" component={Login} />
                            <PrivateRoute path="/service/:id">
                                <ServiceInformation />
                            </PrivateRoute>
                            <PrivateRoute path="/checkout/:id">
                                <CheckOut />
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard">
                                <Dashboard />
                            </PrivateRoute>
                            <PrivateRoute path="/addReview">
                                <AddTestimonial />
                            </PrivateRoute>
                            <PrivateRoute path="/orders">
                                <OrderList />
                            </PrivateRoute>
                            <AdminRoute path="/admin/orders">
                                <AllOrders />
                            </AdminRoute>
                            <AdminRoute path="/admin/addService">
                                <AddServices />
                            </AdminRoute>
                            <AdminRoute path="/admin/manageServices">
                                <ManageServices />
                            </AdminRoute>
                            <AdminRoute path="/admin/makeAdmin">
                                <MakeAdmin />
                            </AdminRoute>
                            <AdminRoute path="/admin/admins">
                                <AdminList />
                            </AdminRoute>
                            <Route path="/*" component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </UserContext.Provider>
        </>
    );
}

export default App;

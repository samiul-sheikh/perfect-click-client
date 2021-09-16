import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Homepage/Home/Home';
import Navbar from './Component/Reuse/Navbar/Navbar';
import ServiceInformation from './Component/ServiceInformation/ServiceInformation';
import CheckOut from './Component/CheckOut/CheckOut';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AddServices from './Component/Dashboard//AddServices/AddServices';
import Login from './Component/Login/Login/Login';
import Orders from './Component/Dashboard/Orders/Orders';
import NoMatch from './Component/NoMatch/NoMatch';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import AddTestimonial from './Component/Dashboard/AddTestimonial/AddTestimonial';

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
                            <Route path="/login" component={Login} />
                            <Route path="/service/:id" component={ServiceInformation} />
                            <PrivateRoute path="/checkout/:id">
                                <CheckOut />
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard">
                                <Dashboard />
                            </PrivateRoute>
                            <Route path="/admin/addService" component={AddServices} />
                            <Route path="/addReview" component={AddTestimonial} />
                            <Route path="/admin/orders" component={Orders} />
                            <Route path="/*" component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </UserContext.Provider>
        </>
    );
}

export default App;

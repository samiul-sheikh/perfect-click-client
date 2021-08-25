import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Homepage/Home/Home';
import Navbar from './Component/Reuse/Navbar/Navbar';
import ServiceInformation from './Component/ServiceInformation/ServiceInformation';
import Checkout from './Component/Checkout/Checkout';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AddServices from './Component/Dashboard/Dashboard/AddServices/AddServices';
import Login from './Component/Login/Login/Login';

function App() {
    return (
        <>
            <Router>
                <Navbar></Navbar>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route path="/service/:id" component={ServiceInformation} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/admin/addService" component={AddServices} />
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;

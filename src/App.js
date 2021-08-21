import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Homepage/Home/Home';
import Footer from './Component/Reuse/Footer/Footer';
import Navbar from './Component/Reuse/Navbar/Navbar';
import Checkout from './Component/Checkout/Checkout';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AddServices from './Component/Dashboard/Dashboard/AddServices/AddServices';

function App() {
    return (
        <>
            <Router>
                <Navbar></Navbar>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/admin/addService" component={AddServices} />
                    </Switch>
                </div>
                {/* <Footer /> */}
            </Router>
        </>
    );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Homepage/Home/Home';
import Footer from './Component/Reuse/Footer/Footer';
import Navbar from './Component/Reuse/Navbar/Navbar';

function App() {
    return (
        <>
            <Router>
                <Navbar></Navbar>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </>
    );
}

export default App;

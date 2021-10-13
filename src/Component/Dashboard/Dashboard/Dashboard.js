import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    background: '#F4FDFB',
    height: '100%'
}

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 text-center mt-5">
                    <h3>Hello ! </h3>
                    <h1>{loggedInUser.name}</h1>
                    <h4 className="text-center">Welcome to your Dashboard...!</h4>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
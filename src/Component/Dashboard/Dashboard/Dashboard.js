import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    background: '#F4FDFB',
    height: '100%'
}

const Dashboard = () => {

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h3>Dashboard</h3>
                    <p className="text-center">Admin/User Dashboard</p>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
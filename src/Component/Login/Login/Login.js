import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../config/firebase.config';
import login from '../../../images/login.jpg';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch("https://shrouded-oasis-00377.herokuapp.com/admins")
            .then((res) => res.json())
            .then((admin) => setAdmins(admin));
    }, []);

    const [error, setError] = useState("");
    const [user, setUser] = useState({
        name: "",
        email: "",
    });
    const [newUser, setNewUser] = useState(false);
    const [signedInUser, setSignedInUser] = useState({
        name: "",
        email: "",
        isAdmin: false,
    });

    const handleGoogleSignIn = () => {

        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const newUser = { ...signedInUser };
                newUser.email = user.email;
                newUser.name = user.displayName;
                setSignedInUser(newUser);
                setLoggedInUser(newUser);
                const checkAdmin = admins.find((admin) => admin.email == user.email);
                if (checkAdmin) {
                    newUser.isAdmin = true;
                    setLoggedInUser(newUser);
                }
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button className="btn btn-primary" onClick={handleGoogleSignIn} >Sign in using Google</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={login} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useEffect, useState } from 'react';
import firebase from "../../../Firebase/config.js";

import "./style/Create.scss";


export default (props) => {
    const [form, setForm] = useState({});
    const [setError] = useState("");

    const errs = {
        "Password should be at least 6 characters": "Password should be at least 6 characters.",
        "The email address is already in use by another account.": "The email address is already in use.",
        "The email address is badly formatted.": "Please enter a valid email."
    };

    setForm({
        full_name: "",
        email: "",
        password: ""
    });

    const verificationEmail = () => {
        // [GET CURRENT USER]
        let user = firebase.auth().currentUser;

        user.sendEmailVerification().then(() => {

            setError("Success! Check you inbox to verify your account.");

        }).catch((error) => console.log(error))
    };

    const handleUserRegistration = () => {

        firebase.auth().createUserWithEmailAndPassword(form.email, form.password).then((user) => {

            // [Send verification email onSuccess]
            verificationEmail();
            
        }).catch(function(error) {
            // [START_EXCLUDE]
            setError(errs[error.message]);
        });
    };
    
    useEffect((props) => {
        props.handleUserPlace(true);
    }, [])

    return(
        <div className="Create">
           <div className="main-login">
                <h1 className="title">Create IN</h1>
                <input type="text" placeholder="Full Name" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
                <input type="text" placeholder="Enter E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Enter Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
               <button className="btn" onClick={(e) => {handleUserRegistration()}}>SIGN UP</button>
                <div className="btn-login"><span>Have An Existing Account ! </span><a href="/login"> Log In</a></div>
           </div>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import firebase from "../../../Firebase/config.js";

import "./style/Login.scss";


export default (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const errs = {
        "There is no user record corresponding to this identifier. The user may have been deleted.": "there is no account registered with this date",
        "The email address is badly formatted.": "Please enter a valid email", 
        "The password is invalid or the user does not have a password.": "Invalid Password"}

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            props.history.push("/");
        })
        .catch((error) => {
            setError(errs[error.message]);
        });
    }
    
    useEffect(() => {
        props.handleUserPlace(true);
    }, [])

    return(
        <div className="login">
        {error ? <span className="alert-danger">{error}</span> : null}
           <div className="main-login" onSubmit={handleSubmit}>
                <h1 className="title">LOG IN</h1>
                <input type="text" placeholder="Enter E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn" type="submit" onClick={(event) => handleSubmit(event)}>LOGIN</button>
                <div className="forgotten"><a href="/forgotten">Forgotten Password?</a></div>
                <span>Don't Have E-mail! <a href="/create">Create One</a></span>
           </div>
        </div>
    );
}

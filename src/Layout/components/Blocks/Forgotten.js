import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import firebase from "../../../Firebase/config.js";

import "./style/Create.scss";


export default (props) => {
    const [email, setEmail] = useState();
    const [error, setError] = useState();

    const reset = (e) => {
        const errs = {
            "The email is badly formatted.": "Please enter valid email",
            "There is no user record corresponding this identifire. The user say have been deleted.": "There is no account registered with this data."
        };

        e.preventDefault();
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => props.history.push("/"))
            .catch((err) => {
                console.log(err);
                setError(errs[err.message])
            });
    }
    
    useEffect((props) => {
        props.handleUserPlace(true);
    }, [])

    return(
        <div className="Create">
            {error ? <div className="alert-danger" style={{borderRadius: '15px', padding: '5px 0'}}>
                <span>{error}</span>
            </div> : null}
           <div className="main-login">
                <h1 className="title">RESET</h1>
                <input type="text" placeholder="Enter E-mail" onChange={(e) => setEmail(e.target.value)} />
                <button className="btn" onClick={(e) => reset(e)}>RESET</button>
                <div className="btn-login"><span>Remember Password ! </span><Link to="/login"> Login</Link></div>
                <span>Don't Have E-mail! <Link to="/create">Create Email</Link></span>
           </div>
        </div>
    );
}

import React, { useState } from 'react';
import { Redirect, Router, BrowserRouter } from 'react-router-dom';
import LoginForm from '../../components/Login/loginform';
import './login.css';


function Login() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");
    const [redirection, setRedirection] = useState(false); 

    const Logged = details => {

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("toto");
        setUser({
            name: details.name,
            email: details.email
        });
        setRedirection(true);
        
        } else {
            console.log("tata");
            setError("pas connecté");
        }
        
    } 

    const Logout = () => {
        setUser({ name: "", email: ""});
   }
   if (redirection) {
       return <Redirect to="/" />
   }


    return (
        
        <div>

            {(user.email != "") ? (
                <div className="Welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>

                    <button onClick={Logout} >Logout</button>
                </div>
            ) : (
                <LoginForm Logged={Logged} error={error}/>
            )}
            
        </div>
    )
}


export default Login;
import React, { useState } from 'react';
import LoginForm from '../../components/Login/loginform';
import './login.css';


function Login() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Logged = details => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {
        console.log("connecté");
        setUser({
            name: details.name,
            email: details.email
        });
        } else {
            console.log("pas connecté");
            setError("pas connecté");
        }
        
    } 

    const Logout = () => {
        setUser({ name: "", email: ""});
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
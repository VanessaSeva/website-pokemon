import React, { useState } from 'react';
import './login.css';


function LoginForm({ Logged, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Logged(details);

    }


    return (
       <form onSubmit={submitHandler}>
           <div className="formulaire">
                <h2>Login</h2>
                { ( error != "") ? (<div className="error">{error}</div>) : "" }
            <div className="form-group">
                <label>Nom :</label>
                <input type="text" name="name" id="name" onChange={ e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className="form-group">
                <label>Email :</label>
                <input type="email" name="email" id="email" onChange={ e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label>Mot de passe :</label>
                <input type="password" name="password" id="password" onChange={ e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <input type="submit" value="Se Connecter"/>
        
            
        
           </div>
       </form>
    )
}

export default LoginForm;
import React, { useState } from 'react';
import './login.css';


function LoginForm({ Logged, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Logged(details);

    }


    return (
        <div className="container">
            <div className="container-form">
       <form onSubmit={submitHandler}>
           
           <div className="formulaire">
                <h2>Se connecter</h2>
                { ( error != "") ? (<div className="error">{error}</div>) : "" }
            <div className="form-group">
                <label>Nom :</label>
                <input className="form-control form-rounded" type="text" name="name" id="name" onChange={ e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className="form-group">
                <label>Email :</label>
                <input className="form-control form-rounded"  type="email" name="email" id="email" onChange={ e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label>Mot de passe :</label>
                <input className="form-control form-rounded"  type="password" name="password" id="password" onChange={ e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <div>
            <input className="btn btn-primary form-rounded" type="submit" value="Se Connecter"/>
            </div>
        
            
        
           </div>
           
       </form>
       </div>
       </div>
       
    )
}

export default LoginForm;
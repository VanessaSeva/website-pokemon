import React, { Component } from 'react';
import './searchbar.css';
import { Formik } from 'formik';





export default class Searchbar extends Component {
    render() {
        return(
          
            <div className="formGroupe">
                <input className="form-control-lg" placeholder="search ..."/>
                <button className="btn btn-lg btn-success ml-2" type="submit" >Go !</button>

            </div>
            
        )
    }
    
}
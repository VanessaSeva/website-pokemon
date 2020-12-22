import React, { Component } from 'react';
import './searchbar.css'




export default class Searchbar extends Component {
    render() {
        return(
            <div className="formGroupe">
                <input name="query" className="form-control-lg" placeholder="search ..."/>
                <button className="btn btn-large btn-success ml-2" type="submit" >Go !</button>

            </div>
        )
    }
}
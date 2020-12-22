import React, { Component } from 'react';
import './header.css'


export default class Header extends Component {
    render() {
        return (
          <header className="navbar navbar-expand-lg">
            <a className="navbar-brand text-warning" href="/">Pokemon Card Shop</a>
            <button className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                </li>
                <li className="nav-item navbar-nav ml-auto">
                  <a className="nav-link text-warning" href="/">Connecté</a>
                  <a className="nav-link text-warning" href="/">Panier</a>
            
                </li>
                
              </ul>
              <span class="glyphicon glyphicon-shopping-cart"></span>
            </div>
          </header>
        );
      }
    
    }


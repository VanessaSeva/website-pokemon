import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Searchbar from './components/Searchbar/searchbar';


class App extends Component {
    render() {
      return(
        <div>
          <Header />
          <Searchbar />
        </div>
      )
    }
}








export default App;

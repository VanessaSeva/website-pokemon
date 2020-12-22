import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Searchbar from './components/Searchbar/searchbar';
import * as axios from 'axios';



class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    error: null,
    loaded: false,
    cards: []
    }
}






componentDidMount(){
  axios.get('https://api.pokemontcg.io/v1/cards')
          .then( response => response.data)
          .then(
            (result) => {
              this.setState({
                loaded: true,
                cards: result.cards
              })
            },
            (error) => {
              this.setState({
                loaded: true,
                error
              })
            }
          )
         
}




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

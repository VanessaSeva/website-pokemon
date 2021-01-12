import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Searchbar from './components/Searchbar/searchbar';
import * as axios from 'axios';
import Cardslist from './components/CardsList/cardslist';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Basket  from './components/Basket/basket';
import  Login  from './components/Login/login';




class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    error: null,
    loaded: false,
    selectedCard: 0,
    cards: []
    }
}

updateCards = (cards) => {
  this.setState({
    cards,
    loaded: true
  })

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
        <>
        <Header />

        <BrowserRouter>
        <Switch>
           
        <Route  exact path="/">
            <Cardslist cards={ this.state.cards} />
            </Route>
       
  
          <Route path="/basket" component={Basket} />
            
    
          <Route path="/login"  component={Login}/>
           
          
        </Switch>
        </BrowserRouter>
         
        
        </>
      )
    }
}








export default App;

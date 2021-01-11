import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Searchbar from './components/Searchbar/searchbar';
import * as axios from 'axios';
import Cardslist from './components/CardsList/cardslist';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard  from './components/Dashboard/dashboard';
import  Preference  from './components/Preference/preference';




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
        <Searchbar  updateCards={ this.updateCards} />

        <BrowserRouter>
        <Switch>
           
        <Route  exact path="/">
            <Cardslist cards={ this.state.cards} />
            </Route>
       
  
          <Route path="/dashboard" component={Dashboard} />
            
    
          <Route path="/preference"  component={Preference}/>
           
          
        </Switch>
        </BrowserRouter>
         
        
        </>
      )
    }
}








export default App;

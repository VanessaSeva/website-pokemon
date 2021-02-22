import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import Cardslist from "./components/CardsList/cardslist";
import Header from './components/Header/header'
import Favoris from "./components/Favoris/favoris";



function App({}) {

  return (
    
    <div>
    <Header />
   
    <Switch>
      <Route  path="/" exact component={Cardslist}/>
     
     
      <Route path="/favoris" component={Favoris} />
     
   
     </Switch>
     
    </div>
    

  
  )
}

export default App;
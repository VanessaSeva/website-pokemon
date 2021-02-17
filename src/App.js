import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import Cardslist from "./components/CardsList/cardslist";
import Header from './components/Header/header'

function App() {

  return (
    <div>

      <Header />
  
      <Cardslist  />

    </div>

  
  )
}

export default App;
import React, { useState, useEffect } from "react";
import Searchbar from '../Searchbar/searchbar';
import './cardslist.css';
import axios from 'axios'


export default function cardslist(props) {

   
const [cards, setState] = useState([])

useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/cards')
      .then(response => response.data)
      .then(data=>data.data)
      .then (data=>setState(data))
      .catch(error => console.log(error.response)) 
      }, [])


    return (

        <div className="container">
            <div className="card">
            <ul>
                    {
                      cards.map(card => (
                          <li key={card.id}>{card.name}
                        <div>   
                            {card.evolvesFrom ? 'evolution de ' : 'n a pas d evolution'}
                          {card.evolvesFrom}
                        </div>
                          <img className="card-img-top" src={card.images.small} />
                            
                          </li>
                          
                         
                      ))
                    }       
                  
            </ul>
          
            </div>
        </div>
    )
}


import React, { useState, useEffect } from "react";
import './cardslist.css';
import axios from 'axios'
import Searchbar from '../Searchbar/searchbar'


export default function cardslist() {

const [filterCards, setFilterCards] = useState([])
const [cards, setCards] = useState([])
const [search, setSearch] = useState('')


useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/cards')
      .then(response => response.data)
      .then(data=>data.data)
      .then (data=>setCards(data))
      .catch(error => console.log(error.response)) 
      }, [])


useEffect(() => {
      setFilterCards(
          cards.filter(card => 
            card.name.toLowerCase().includes(search.toLowerCase())))
          
      
    }, [search, cards])



console.log(setFilterCards);
    return (

        <div className="container">
            <Searchbar search={search} setSearch={setSearch} />
            <div className="card">
            <ul>
                    {
                      filterCards.map(card => (
                       <li key={card.id}>{card.name}
                          
                        <div> 
                      
                        </div>
                        <button className="btn btn-primary rounded-pill ml-6" >Like</button>
                          <img className="card-img-top" src={card.images.small} />
                          {card.evolvesFrom ? 'evolution de ' : 'n a pas d evolution'}
                      
                        {card.evolvesFrom}
                          </li>
                          
                         
                      ))
                    }       
                  
            </ul>
          
            </div>
        </div>
    )
}


import React, { Component } from 'react';
import Searchbar from '../Searchbar/searchbar';
import './cardslist.css';



export default class Cardslist extends Component {




    render() {
        console.log(this.props.cards);

        if (this.props.error) {
            return <div> Erreur</div>

        }  else if (!this.props.loaded) {
           
           
        return (
            
            <div className="container">
                 <div className="Cards">
            <Searchbar updateCards={ this.updateCards} />
                <ul>
                    { this.props.cards.map(card => (
                        <li key={card.id}>
                            { card.name }
                            <img src={ card.imageUrlHiRes } />
                            </li>
                        
                    
                    ))}
                    
                    
                </ul>
                </div>
                </div>
            )
        }
       
    }
    
    
}

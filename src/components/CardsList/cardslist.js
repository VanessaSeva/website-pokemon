import React, { Component } from 'react';


export default class Cardslist extends Component {




    render() {
        console.log(this.props.cards);

        if (this.props.error) {
            return <div> Erreur</div>

        }  else if (!this.props.loaded) {
           
        return (
                <ul>
                    { this.props.cards.map(card => (
                        <li key={card.id}>
                            { card.name }
                            <img src={ card.imageUrlHiRes } />
                            </li>
                        
                    
                    ))}
                    
                    
                </ul>
                
            )
        }
       
    }
    
    
}

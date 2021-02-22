import React, { useState, useEffect } from 'react';
import './searchbar.css';

export const Searchbar = ({search, setSearch}) => {

    
    const [value, setValue] = useState('')


    const handleSubmit = e => {
        e.preventDefault();
        setValue(e.target.value)
    }

    const onChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
    }

   
   
  
        return(
          
         <div className="formGroupe">
                <input className="form-control-lg" placeholder="search ..."
                type="text"
                value={search}
                onChange={onChange}
                 />
             <div>
                <button className="btn btn-lg btn-success ml-2" type="submit" onSubmit={handleSubmit} value={value}>Go !</button>
            </div>

        
        </div>
           
        )
    }
    
export default Searchbar

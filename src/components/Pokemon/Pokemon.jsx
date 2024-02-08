import React from 'react';
import './Pokemon.css';

function Pokemon(props) {
    return (
        <div className="pokemon">
            <div className='pokemon-name'>Name: {props.name}</div>
            <img className='pokemon-image' src={props.image} alt={props.name} />
        </div>
    );
}

export default Pokemon;
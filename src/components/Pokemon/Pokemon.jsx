import React from 'react';

function Pokemon(props) {
    return (
        <div className="pokemon">
            <div>Name: {props.name}</div>
            <img src={props.image} alt={props.name} />
        </div>
    );
}

export default Pokemon;
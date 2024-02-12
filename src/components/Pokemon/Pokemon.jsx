import { Link } from 'react-router-dom';
import './Pokemon.css';
// import React from 'react';

function Pokemon(props) {
    return (
        <div className="pokemon">
            <Link to={`/pokemon/${props.id}`}>
                <div>
                    <div className='pokemon-name'>Name: {props.name}</div>
                    <div>
                        <img className='pokemon-image' src={props.image} alt={props.name} />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Pokemon;

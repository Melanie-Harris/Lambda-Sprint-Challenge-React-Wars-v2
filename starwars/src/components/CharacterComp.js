import React from 'react';
import './StarWars.css';

// Import character component
// import Character from './Characters';

const CharacterComp = (props) => {
    return (
        <div className="character-card">
            {props.characters.map(item =>
                <h2>{item.name}</h2>
                

            )};
        </div>

    );
};

export default CharacterComp;
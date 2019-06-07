import React from 'react';
import './StarWars.css';

// Import character component
import Character from './Characters';

const CharacterComp = (props) => {
    return props.character.map(item => {
    return (
        <div className="character-card">
                <h2>{item.name}</h2>
                <SW_Characters info={item} />
            </div>
        );
    });
};

export default CharacterComp;
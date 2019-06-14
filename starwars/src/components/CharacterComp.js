import React from 'react';
import './StarWars.css';

// Import character component
// import Character from './Characters';

const CharacterComp = (props) => {
    return (
        <div className="character-card">
            {props.characters.map(item =>
                <div className="card">
                    <h2 className="names">{item.name}</h2>
                    <h2><span className="title">Birth Year: </span> {item.birth_year}</h2>
                    <h2><span className="title">Mass: </span> {item.mass}</h2>
                    <h2><span className="title">Height: </span> {item.height}</h2>
                    <h2><span className="title"> Hair Color: </span> {item.hair_color}</h2>
                    <br />
                </div>


            )};
        </div>

    );
};

export default CharacterComp;
import React from 'react';
import HomeWorld from './HomeWorld';
import Species from './Species';



const Character = props => {
    // console.log(props.character);
    // console.log(props.homeworld);
    console.log(props.character.species);

    return (
        <div className="character-card">
            <h3>
                {props.character.name}
            </h3>

            <div className="character-info">
                <HomeWorld homeWorld={props.homeworld}/>

                <Species species={props.character.species}/>

                <p>
                    <strong>Gender: </strong> {props.character.gender}
                </p>

                <p>
                    <strong>Hair Color: </strong> {props.character.hair_color}
                </p>

                <p>
                    <strong>Skin Color: </strong> {props.character.skin_color}
                </p>

                <p>
                    <strong>Eye Color: </strong> {props.character.eye_color}
                </p>
            </div>
        </div>
    );
};

export default Character;
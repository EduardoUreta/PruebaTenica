import { useState } from 'react';
import { RickyMortyItems } from "./RickyMortyItems";

const CharacterDetails = () => {
    const [character, setCharacter] = useState();

    return (
        <div>
          {character && <p>cargando</p>}
            <RickyMortyItems
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                image={character.image}
                origin={character.origin.name}
                location={character.location}
            />
            {/* <Link to={`/`}">Ver Detalles</Link> */}
            <button>Volver Atrás</button>

        </div>
    );
};

export default CharacterDetails;

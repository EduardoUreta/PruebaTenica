import { useFetch } from "../hooks/useFetch";
import { RickyMortyItems } from "./RickyMortyItems";

export const RickMortyGrid = () => {

    const {data, isLoading, error} = useFetch('https://rickandmortyapi.com/api/character');

    return (
        <>
            <h1>Personajes de Rick y Morty</h1> 
            {isLoading && <p>Cargando...</p>}
            {error && <p>Error al cargar los datos</p>}
            <div style={{ display: 'flex', width: '100%'}}>
                {data && data.results.map(character => (
                    <div key={character.id} style={{ width: '50%', padding: '10px' }}>
                        <RickyMortyItems
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            image={character.image}
                            origin={character.origin.name}
                            location={character.location.name}
                        />
                    {/* <Link to={`/details/${id}`}>Ver Detalles</Link> */}
                    <button>Ver Detalles</button>
                    </div>
                ))}
            </div>
        </>
  )
}


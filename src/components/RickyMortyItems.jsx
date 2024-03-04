
export const RickyMortyItems = ({id, name, status, species, image, origin, location}) => {
  return (
    <>
    <div style={{ display: 'flex' }}>
        <div>
            <img key={id} src={image} alt={name} style={{ marginRight: '10px' }} />
        </div>
        <div style={{width: '300px'}}>
            <h2>{name}</h2>
            <p>{status} - {species}</p>
            <p>Last known location: <br/>{origin}</p>
            <p>First seen in: <br/>{location}</p>

        </div>
    </div>      
    </>
  )
}

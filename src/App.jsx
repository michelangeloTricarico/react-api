import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [actors, setActors] = useState([])

  function CreateCard() {
    fetch("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setActors(data)
      })
  }

  useEffect(CreateCard, [])

  return (
    <>
    <div className="row">
    {actors.map((actor)=>(
      <div className="col-3">
        <div className="card" key={actor.id}>
          <img src={actor.image} alt="" />
          <p><i class="bi bi-person-vcard-fill px-2"></i>{actor.name}</p>
          <p><i class="bi bi-calendar2-week-fill px-2"></i>{actor.birth_year}</p>
          <p>{actor.nationality}</p>
          <p>{actor.known_for}</p>
          <p>{actor.awards}</p>
          <p>{actor.biography}</p>  
        </div>
      </div>
      ))}
    </div>
    
      
    
      
    </>
  )
}

export default App

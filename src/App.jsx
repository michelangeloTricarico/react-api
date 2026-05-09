import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [actors, setActors] = useState([])

  function CreateCard() {
    let actorsList=[]
    fetch("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        data.forEach(element => {actorsList.push(element)});
      })
    fetch("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => res.json())
      .then((data) => {
        data.forEach(element => {actorsList.push(element)});
        console.log(actorsList)
        setActors(actorsList)     
      })
      
    
  }

  useEffect(CreateCard, [])

  return (
    <>
    <div className="row">
    {actors.map((actor)=>(
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2" >
        <div className="card" style={{height:"700px"}} key={actor.id}>
          <img src={actor.image} style={{height: "300px",width: "100%",objectFit: "cover"}} alt="" />
          <p><i className="bi bi-person-vcard-fill px-2"></i>{actor.name}</p>
          <p><i className="bi bi-calendar2-week-fill px-2"></i>{actor.birth_year}</p>
          <p><i className="bi bi-globe px-2"></i>{actor.nationality}</p>
          <p><i className="bi bi-film px-2"></i>{actor.known_for}</p>
          <p><i className="bi bi-award-fill px-2"></i>{actor.awards}</p>
          <p><i className="bi bi-book-fill px-2"></i>{actor.biography}</p>  
        </div>
      </div>
      ))}
    </div>
   
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [actors, setActors] = useState([])
  const [castMale, setCastMale] = useState([])
  const [castFemale, setCastFemale] = useState([])

  function CreateCard() {
    let actorsList=[]
    fetch("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCastFemale(data)
        data.forEach(element => {actorsList.push(element)});
      })
    fetch("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => res.json())
      .then((data) => {
        data.forEach(element => {actorsList.push(element)});
        console.log(actorsList)
        setCastMale(data)
        setActors(actorsList)     
      })
      
    
  }

  useEffect(CreateCard, [])

  return (
    <>
    <h1 className='text-center m-2'>Cast Fetching</h1>
    <div className="row">
    {actors.map((actor,index)=>(
      <div key= {"card-" + index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 px-4" >
        <div className="card" style={{height:"700px"}}>
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

    <div className="row">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Lista attori
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <ul>
                {castMale.map((actor,index)=>(<li key={"castMale-" + index}>{actor.name}</li>))}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Lista attrici
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <ul>
                {castFemale.map((actor,index)=>(<li key={"castFemale-" + index}>{actor.name}</li>))}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Lista attori ed attrici
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <ul>
                {actors.map((actor,index)=>(<li key={"cast-" + index}>{actor.name}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default App

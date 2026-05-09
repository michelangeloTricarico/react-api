import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Cards'
import Accordion from './components/Accordion'

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
    <Accordion actors={actors} castFemale={castFemale} castMale={castMale} />
    <Card actors={actors} />

    
   
    </>
  )
}

export default App

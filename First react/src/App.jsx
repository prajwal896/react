import React from 'react'
import { useEffect} from 'react'
import Card from "./card"
import { use } from 'react'

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}, [])

function App() {
  return (
    <>
      <Card />
    </>
  )
}

export default App

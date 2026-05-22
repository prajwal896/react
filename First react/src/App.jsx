import React from 'react'
import { useEffect, useState} from 'react'
import Card from "./card"
import Practice from './practice'
//import { use } from 'react'



function App() {
  /*const [data, setData] = useState([])
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(aand => setData(data))
    .catch(error => console.error(error));
}, [])

  return(
    <>{data.map(item => (
      <Card 
        key={item.id} 
        id={item.id} 
        uid={item.userId} 
        title={item.title} 
        body={item.body} 
      />
    ))}</>
  )
}*/
return (
    <>
      <Practice />
    </>
  )
}


export default App

import { useEffect,useState } from "react";

import React from 'react'

const App = () => {
  const [data, setData] = useState([{}])
  useEffect(()=>{
    fetch("/members").then(
      (response) => response.json()
    ).then(
      (data) =>(
        setData(data),
        console.log(data)
      )
    )
  },[])
  return (
    <div>
      {
        (typeof data.members === 'undefined') ? (
          <p> backend call failed</p>
        ):(
          data.members.map((member,i)=>(
            <p key = {i}> {member}</p>
          ))
        )
      }
    </div>
  )
}

export default App
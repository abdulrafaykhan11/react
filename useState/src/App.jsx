// import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setname] = useState('Rafay')
  const [num, setnum] = useState(0)

  function nameChange(){
    setname('Abdul Rafay')
    setnum(num + 1)
  }
  
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>My num  is {num}</h1>
      <button onClick={nameChange}>Change Name</button>
    </div>
  )
}

export default App

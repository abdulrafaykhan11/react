import { useState } from "react"


const App = () => {

  const [arr, setarr] = useState({name : 'Abdul Rafay', age : 18})
  const [array, setarray] = useState([10,20,30,'r','a'])

  const changeName =() => {
    const newName = {...arr}
    newName.name = 'Daniyal'
    setarr(newName)
  }

  const changeArray = () => {
    const newArray = [...array]
    newArray[0] = ['50']
    newArray.push('abdul')
    setarray(newArray)
  }

  return (
    <div>
      <h1>{arr.name},{arr.age}</h1>
      <button onClick={changeName}>Change Info</button>
      <h1>{array}</h1>
      <button onClick={changeArray}>Change Info</button>
    </div>
  )
}

export default App

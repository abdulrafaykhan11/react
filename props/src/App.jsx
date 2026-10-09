import React from 'react'
import Card from './componenets/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Abdul Rafay" age={25}/>
      <Card user="John Doe" age={30}/>
      <Card user="Jane Smith" age={28}/>
    </div>
  )
}

export default App

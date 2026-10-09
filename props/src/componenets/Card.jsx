import React from 'react'

const Card = (props) => {
  return (
      <div className="card">
        <img src="https://images.unsplash.com/photo-1791525107464-b7bf62b2cad3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user} , {props.age}</h1>
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card

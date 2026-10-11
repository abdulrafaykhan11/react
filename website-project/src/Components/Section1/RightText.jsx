// import React from 'react'

import RightCard from "./RightCard"

const RightText = (props) => {
  return (
    <div className="h-full w-2/3 p-6 ">
        <RightCard users={props.users}/>
    </div>
  )
}

export default RightText

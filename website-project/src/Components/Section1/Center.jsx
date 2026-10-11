// import React from 'react'

import LeftText from "./LeftText"
import RightText from "./RightText"

const Center = (props) => {
  return (
    <div className="h-[89vh] flex items-center gap-10 py-11 px-18 ">
      <LeftText/>
      <RightText users={props.users}/>
    </div>
  )
}

export default Center

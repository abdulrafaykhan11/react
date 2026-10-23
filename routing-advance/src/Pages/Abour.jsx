import { useNavigate } from "react-router-dom"

const Abour = () => {

  const navigate = useNavigate()

  const btnClicked = () => {
    navigate('/')
  }

  return (
    <div>
      <button onClick={btnClicked} className="bg-green-800 rounded m-2 px-5 py-2">Ruturn to home</button>
        <h1 className="text-3xl text-bold underline absolute top-0.5 left-0.5 right-0.5 -translate-0.5 h1">About</h1>
    </div>
  )
}

export default Abour
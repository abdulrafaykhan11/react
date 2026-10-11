import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"


const App = () => {

  const users = [
    {
    intro : "",
    img : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag : "Satisfied",
  },
    {
    intro : "",
    img : "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag : "Unserved",
  },
    {
    intro : "",
    img : "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag : "Underbank",
  },
      {
    intro : "",
    img : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag : "Satisfied",
  }
]


  return (
    <div className="">
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App
App
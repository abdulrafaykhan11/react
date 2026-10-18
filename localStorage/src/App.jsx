const App = () => {

  const user = {
    user : 'rafay',
    age : 18,
    city : 'Karachi'
  }
  localStorage.setItem('user',JSON.stringify(user))

  let info = JSON.parse(localStorage.getItem('user'))
  console.log(info);
  


}

export default App

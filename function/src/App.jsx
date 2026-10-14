

const App = () => {

  function btnclick(){
    var h1 = document.querySelector('h1')
    h1.innerHTML = "Hello , Rafay Bhai"
  }

  function input(){
    let input = document.querySelector('input')
    console.log(input.value);    
  }

  function scrolling(elem){
    console.log("Scrolling at speed", elem);
  }

  return (
    <div>
      <h1>Hello , Rafay</h1>

      <button onClick={btnclick}>Click me</button>
      <br/>
      <input type="text" placeholder="Enter Name"  onChange={input}/>


      <div onWheel={(elem) => {
        scrolling(elem.deltaY);
      }}>

      <div className="page1">j</div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>

    </div>
  )
}

export default App

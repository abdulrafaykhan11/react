import Nav2 from "./Nav2"

const Navbar = (props) => {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
  return (
    <div className="nav">
        <h1>Abdul Rafay</h1>
        <h6>{props.children[0]}</h6>
        <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
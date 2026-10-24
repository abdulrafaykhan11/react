const Navbar = (props) => {

    function changeTheme(){
        props.settheme('Dark')
    }

  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}
export default Navbar
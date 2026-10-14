const App = () => {

  const submit = (e) => {
    e.preventDefault();
    console.log('From Submitted');
    
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submit(e)
      }}>
      <input type="text" placeholder="Enter Your Name" /> <br />{" "}
      <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

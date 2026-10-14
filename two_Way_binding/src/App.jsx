import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("Form submitted by : ", name);

    setname("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

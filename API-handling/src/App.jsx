import axios from "axios";
import { useState } from "react";

const App = () => {
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
    const data = await res.json();
    console.log(data);
  }

  const getDataArrow = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  };

  const axiosData = async() => {
    let res =await axios.get('https://jsonplaceholder.typicode.com/posts/')
    console.log(res.data);   
  }

  const [data, setdata] = useState([])
  const picData = async() => {
    let response = await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
    console.log(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getDataArrow}>Get Arrow Data</button>
      <button onClick={axiosData}>Get Axios Data</button>
      <button onClick={picData}>Get Pic Data</button>
      <div>
        {data.map(function(elem,idx){
          return <div>
            <h3>{elem.author}</h3>
            <img src={elem.download_url} alt="" />
          </div>
        })}
      </div>


    </div>
  );
};

export default App;

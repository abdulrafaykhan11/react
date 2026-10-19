import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setindex] = useState(1);

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`,
    );
    setUserData(res.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserDate = <h1 className="absolute top-1/2 left-1/2 -translate-1/2 text-white">loading....</h1>

  if (userData.length > 0) {
    printUserDate = userData.map(function (elem, idx) {
      return (
        <Card elem={elem} idx={idx} />
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white">
      <div className="flex flex-wrap h-[82] gap-4">{printUserDate}</div>

      <div className="flex justify-center items-center p-4 gap-6">
        <button
          onClick={() => {
            setindex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-black font-semibold px-4 py-2 rounded hover:bg-amber-200 hover:text-gray-600 active:scale-90"
        >
          Next
        </button>
        <h1>Page {index}</h1>
        <button style={{opacity : index == 1 ? 0.5 : 1}}
          onClick={() => {
            if (index > 1) {
              setindex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-black font-semibold px-4 py-2 rounded hover:bg-amber-200 hover:text-gray-600 active:scale-90"
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default App;

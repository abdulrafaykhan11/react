import { useState } from "react";

const App = () => {
  const [task, settask] = useState([]);

  const [title, settitle] = useState("");
  const [detail, setdetail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, detail });

    settask(copyTask);

    settitle("");
    setdetail("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex item-start lg:w-1/2 flex-col gap-5 p-10"
      >
        <h1 className="text-5xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Heading"
          className="border-2 font-medium w-full rounded outline-none px-5 py-2"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter details"
          className="border-2 font-medium w-full rounded px-5 py-2 outline-none h-35"
          value={detail}
          onChange={(e) => {
            setdetail(e.target.value);
          }}
        />
        <button className="border-2 active:bg-gray-300 font-medium w-full px-4 py-2 rounded-full outline-none bg-white text-black">
          Add Notes
        </button>
      </form>

      <div className="p-10 lg:border-l-2 lg:w-1/2">
        <h1 className="text-5xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap p-10 gap-5 item-start justify-start mt-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start h-52 w-40 rounded-2xl p-7 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLPnW7YWMbLsXu_OPx0AzE4A5fDNXEEo_Bf7ynff9VA&s=10')]  text-black"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight font-medium text-gray-600">
                    {elem.detail}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full bg-red-600 text-white rounded font-bold p-1 font-xs cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

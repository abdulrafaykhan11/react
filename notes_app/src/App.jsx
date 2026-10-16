const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
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
        />
        <textarea
          type="text"
          placeholder="Enter details"
          className="border-2 font-medium w-full rounded px-5 py-2 outline-none h-35"
        />
        <button className="border-2 font-medium w-full px-4 py-2 rounded-full outline-none bg-white text-black">
          Add Notes
        </button>
      </form>

      <div className="p-10 lg:border-l-2 lg:w-1/2">
        <h1 className="text-5xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap p-10 gap-5 mt-5 h-full overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-white "></div>
          <div className="h-52 w-40 rounded-2xl bg-white "></div>
        </div>
      </div>
    </div>
  );
};

export default App;

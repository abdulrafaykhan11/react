const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex item-start justify-between flex-col gap-5 p-5"
      >
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
    </div>
  );
};

export default App;

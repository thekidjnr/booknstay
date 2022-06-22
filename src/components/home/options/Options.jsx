const Options = ({ travelers, setTravelers }) => {
  const handleCounter = (name, operation) => {
    setTravelers((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? travelers[name] + 1 : travelers[name] - 1,
      };
    });
  };

  return (
    <div className="bg-gray-200 rounded-md p-2 absolute -right-8 w-52">
      <div className="flex items-center justify-between  mb-2">
        <h1 className="text-lg ">Adult</h1>
        <div className="flex gap-2 ">
          <button
            className="bg-gray-500 text-white w-8 text-lg"
            onClick={() => handleCounter("adult", "d")}
            disabled={travelers.adult <= 1}
          >
            -
          </button>
          <span className="text-lg  w-4 text-center">{travelers.adult}</span>
          <button
            className="bg-gray-500 text-white w-8 text-lg"
            onClick={() => handleCounter("adult", "i")}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-between mb-2">
        <h1 className="text-lg ">Children</h1>
        <div className="flex gap-2">
          <button
            className="bg-gray-500 text-white w-8 text-lg"
            onClick={() => handleCounter("children", "d")}
            disabled={travelers.children <= 0}
          >
            -
          </button>
          <span className="text-lg  w-4 text-center">{travelers.children}</span>
          <button
            className="bg-gray-500 text-white w-8 text-lg"
            onClick={() => handleCounter("children", "i")}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-between m">
        <h1 className="text-lg ">Room</h1>
        <div className="flex gap-2">
          <button
            className="bg-gray-500 text-white w-8 text-lg"
            onClick={() => handleCounter("room", "d")}
            disabled={travelers.room <= 1}
          >
            -
          </button>
          <span className="text-lg  w-4 text-center">{travelers.room}</span>
          <button
            className="bg-gray-500 text-white w-8 text-lg"
            onClick={() => handleCounter("room", "i")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;

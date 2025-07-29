const Buttons = ({ calVal, setCalVal }) => {
  const btns = ["7", "8", "9", "C", "4", "5", "6", "/", "1", "2", "3", "-", "0", ".", "+", "="];

  const handleClick = (val) => {
    if (val === "C") {
      setCalVal("");
    } else if (val === "=") {
      try {
        setCalVal(eval(calVal).toString());
      } catch {
        setCalVal("Error");
      }
    } else {
      setCalVal(calVal + val);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {btns.map((button, i) => (
        <button
          key={i}
          onClick={() => handleClick(button)}
          className="h-[8vh] w-[4vw] bg-yellow-700 text-white flex justify-center items-center text-xl rounded shadow mt-3"
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

import ProptTypes from "prop-types";
import { useState } from "react";

const CounterApp = function ({ value }) {
  const [counter, setCounter] = useState(0);

  console.log(counter);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: ProptTypes.number.isRequired,
};

export default CounterApp;

import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../Actions/counterActions";

// store:
function CounterComponent({ count, increment, decrement, reset }) {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.counterReducer.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

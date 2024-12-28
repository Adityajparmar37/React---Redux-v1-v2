import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../Actions/counterActions";

// The reason we pass arguments (props) to the UserComponent function is because when using React Redux, the component is connected to the Redux store via the connect() function. This allows it to receive data (state) from the Redux store and actions (dispatch functions) as props.


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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Actions/counterActions";

export default function CounterComponent() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  // console.log(count);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}

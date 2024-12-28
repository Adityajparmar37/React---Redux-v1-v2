import React from "react";
import "./App.css";
import CounterComponent from "./Component/CounterComponent";
import UserComponent from "./Component/UserComponent";

export default function App() {
  return (
    <>
      <UserComponent />
      <CounterComponent />
    </>
  );
}

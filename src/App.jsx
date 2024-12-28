import React from "react";
import "./App.css";
import CounterComponent from "./Component/CounterComponent";
import UserComponent from "./Component/UserComponent";
import ProductComponent from "./Component/ProductComponent";

export default function App() {
  return (
    <>
      <UserComponent />
      <ProductComponent />
      <CounterComponent />
    </>
  );
}

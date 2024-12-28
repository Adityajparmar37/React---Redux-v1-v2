import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../Actions/userActions";

function UserComponent({ user, setUser }) {
  const [Name, setName] = useState(user.name || "");
  const [Age, setAge] = useState(user.age || 0);

  const handleSetUser = () => {
    setUser(Name, Age);
  };
  return (
    <>
      <h1>User Information</h1>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>

      <input
        type="text"
        value={Name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={Age}
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={handleSetUser}>Set User</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);

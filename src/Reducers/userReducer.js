const initialUserState = {
  user: {
    name: "",
    age: 0,
  },
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          age: action.payload.age,
        },
      };

    default:
      return state;
  }
};

export default userReducer;

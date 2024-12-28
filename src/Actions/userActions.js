export const setUser = (name, age) => {
  return {
    type: "SET_USER",
    payload: { name, age },
  };
};


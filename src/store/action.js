export const Add = (email, name) => {
  return {
    type: "ADD_USER",
    email,
    name,
  };
};

export const Remove = (id) => {
  return {
    type: "REMOVE_USER",
    id,
  };
};

export const Edit = (check) => {
  return {
    type: "EDIT_USER",
    check,
  };
};

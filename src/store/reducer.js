import { combineReducers } from "redux";

const USER = [
  {
    id: 1,
    email: "thangld@vnext.com.vn",
    name: "Le Thang",
  },
];

const CHECK = {
  check: false,
};

export function User(state = USER, action) {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          id: state.length + 1,
          email: action.email,
          name: action.name,
        },
      ];
    case "REMOVE_USER":
      state = state.filter((item) => {
        return item.id !== action.id;
      });
      return [...state];
    default:
      return state;
  }
}

function Check(state = CHECK, action) {
  switch (action.type) {
    case "EDIT_USER":
      return { ...state, check: action.check };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  User,
  Check,
});

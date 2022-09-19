import { CLEAN_USER_LOGIN, GET_USER_LOGIN } from "../actions/Users/ActionType";

const initialState = JSON.parse(
  window.localStorage.getItem("usersState") ||
    JSON.stringify({
      loginUser: {},
    })
);

const saveState = (state) => {
  window.localStorage.setItem("usersState", JSON.stringify(state));
};

export default function userLoginReducer(state = initialState, { type, payload }) {
  let newState;
  switch (type) {
    case GET_USER_LOGIN: {
      newState = {
        ...state,
        loginUser: payload,
      };
      break;
    }

    case CLEAN_USER_LOGIN: {
      newState = {
        ...state,
        loginUser: payload,
      };
      break;
    }

    default:
      newState = state;
  }
  saveState(newState);
  return newState;
}

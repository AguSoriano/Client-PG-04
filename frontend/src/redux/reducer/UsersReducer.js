import {
  CLEAN_USER_DETAIL,
  CLEAN_USER_LOGIN,
  GET_ALL_USERS,
  GET_ONE_USER_DETAIL,
  GET_USER_LOGIN,
} from "../actions/Users/ActionType";

const initialState = JSON.parse(
  window.localStorage.getItem("usersState") ||
    JSON.stringify({
      loginUser: {},
      allUsersOnDb: [],
      oneUserDetail: {},
      oneUserDetailEdit: {},
    })
);

const saveState = (state) => {
  window.localStorage.setItem("usersState", JSON.stringify(state));
};

export default function usersReducer(state = initialState, { type, payload }) {
  let newState;
  switch (type) {
    case GET_ALL_USERS: {
      newState = {
        ...state,
        allUsersOnDb: payload,
      };
      break;
    }

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

    case GET_ONE_USER_DETAIL: {
      newState = {
        ...state,
        oneUserDetail: payload,
        oneUserDetailEdit: payload,
      };
      break;
    }

    case CLEAN_USER_DETAIL: {
      newState = {
        ...state,
        oneUserDetail: payload,
      };
      break;
    }

    default:
      newState = state;
  }
  saveState(newState);
  return newState;
}

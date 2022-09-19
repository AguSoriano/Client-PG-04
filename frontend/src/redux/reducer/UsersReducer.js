import {
  CLEAN_USER_DETAIL,
  GET_ALL_USERS,
  GET_ONE_USER_DETAIL,
  GET_USER_ORDERS,
} from "../actions/Users/ActionType";

// const initialState = JSON.parse(
//   window.localStorage.getItem("usersState") ||
//     JSON.stringify({
//       allUsersOnDb: [],
//       oneUserDetail: {},
//       oneUserDetailEdit: {},
//     })
// );

// const saveState = (state) => {
//   window.localStorage.setItem("usersState", JSON.stringify(state));
// };

const initialState = {
  allUsersOnDb: [],
  oneUserDetail: {},
  oneUserDetailEdit: {},
  oneUserOrders: [],
};

export default function usersReducer(state = initialState, { type, payload }) {
  // let newState;
  switch (type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        allUsersOnDb: payload,
      };
    }

    case GET_ONE_USER_DETAIL: {
      return {
        ...state,
        oneUserDetail: payload,
        oneUserDetailEdit: payload,
      };
    }

    case CLEAN_USER_DETAIL: {
      return {
        ...state,
        oneUserDetail: payload,
      };
    }

    case GET_USER_ORDERS: {
      return {
        ...state,
        oneUserOrders: payload,
      };
    }

    default:
      return state;
  }
  // saveState(newState);
  // return newState;
}

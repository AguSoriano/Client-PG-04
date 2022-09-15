import { GET_USER_LOGIN } from "../actions/Users/ActionType";

const initialState = {
  loginUser: {},
};

export default function usersReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_USER_LOGIN:
      return {
        ...state,
        loginUser: payload,
      };
    default:
      return state;
  }
}

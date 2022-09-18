import { CLIENTE_SECRET } from "../actions/Stripe/ActionType";

const initialState = {
  clientSecret: "",
};

export default function stripeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CLIENTE_SECRET: {
      return {
        ...state,
        clientSecret: payload,
      };
    }
    default:
      state = state;
  }

  return state;
}

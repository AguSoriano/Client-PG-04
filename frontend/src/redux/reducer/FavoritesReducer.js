import { ADD_FAV, REMOVE_FAV } from "../actions/Favorites/ActionTypes";

const initialState = {
  favorites: [],
};

export default function favoriteReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ADD_FAV: {
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    }
    case REMOVE_FAV: {
      return {
        ...state,
        favorites: state.favorites.filter((prod) => prod.id !== payload),
      };
    }
    default:
      return state;
  }
}

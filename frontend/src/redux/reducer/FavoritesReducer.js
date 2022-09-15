import { ADD_FAV, REMOVE_FAV } from "../actions/Favorites/ActionTypes";

const initialState = JSON.parse(
  window.localStorage.getItem("favoriteState") ||
    JSON.stringify({
      favorites: [],
    })
);

const saveState = (state) => {
  window.localStorage.setItem("favoriteState", JSON.stringify(state));
};

export default function favoriteReducer(
  state = initialState,
  { type, payload }
) {
  let newState;
  switch (type) {
    case ADD_FAV: {
      newState = {
        ...state,
        favorites: [...state.favorites, payload],
      };
      break;
    }
    case REMOVE_FAV: {
      newState = {
        ...state,
        favorites: state.favorites.filter((prod) => prod.id !== payload),
      };
      break;
    }
    default:
      newState = state;
  }
  saveState(newState);
  return newState;
}

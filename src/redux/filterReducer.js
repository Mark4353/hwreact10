const initialState = "";

export const SET_FILTER = "SET_FILTER";

export function setFilter(value) {
  return {
    type: SET_FILTER,
    payload: value,
  };
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}

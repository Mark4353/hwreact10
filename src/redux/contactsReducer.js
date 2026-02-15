import { nanoid } from "nanoid";

const initialState = [];

export const ADD_CONTACT = "ADD_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";

export function addContact({ name, number }) {
  return {
    type: ADD_CONTACT,
    payload: { id: nanoid(), name, number },
  };
}

export function removeContact(id) {
  return {
    type: REMOVE_CONTACT,
    payload: id,
  };
}

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [action.payload, ...state];
    case REMOVE_CONTACT:
      return state.filter((c) => c.id !== action.payload);
    default:
      return state;
  }
}

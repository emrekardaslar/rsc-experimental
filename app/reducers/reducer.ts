import { ACTION_TYPE_ONE, ACTION_TYPE_TWO } from "~/actions/actions";
import { State, Action } from "~/context/types";

// Reducer function handling actions
export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTION_TYPE_ONE:
      return {
        ...state,
        propertyOne: action.payload,
      };
    case ACTION_TYPE_TWO:
      return {
        ...state,
        propertyTwo: action.payload,
      };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

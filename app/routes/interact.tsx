import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { StateProvider } from "../context/Context";
import { State } from "../context/types";
import { reducer } from "../reducers/reducer";
import { useReducer } from "react";
import PropertyView from "../Views/Property/PropertyView";

// Loader for the 'greet' route
export async function loader() {
  const initialState: State = {
    propertyOne: 0,
    propertyTwo: 0,
  };
  return json({ initialState });
}

export default function Interact() {
  const { initialState } = useLoaderData<{ initialState: State }>();

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateProvider state={state} dispatch={dispatch}>
      <PropertyView />
    </StateProvider>
  );
}

// app/routes/greet.tsx
import { json, TypedResponse } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useReducer } from "react";
import SomeComponent from "~/components/SomeComponent";
import { StateProvider } from "~/context/Context";
import { State } from "~/context/types";
import { reducer } from "~/reducers/reducer";

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
      <SomeComponent />
    </StateProvider>
  );
}

// app/context/Context.ts
import { createContext, useContext, ReactNode } from "react";
import { State, Action } from "./types";

// Create the context with correct types
export const StateContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

// Provider component
export function StateProvider({
  children,
  state,
  dispatch,
}: {
  children: ReactNode;
  state: State;
  dispatch: React.Dispatch<Action>;
}) {
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

// Custom hook to use the context
export function useStateContext() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
}

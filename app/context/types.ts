export interface State {
  propertyOne: number;
  propertyTwo: number;
}

export type Action =
  | { type: string; payload: number }
  | { type: string; payload: number };

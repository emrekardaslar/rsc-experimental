import { GreetData } from "../models/GreetModel";
export const GreetRepository = {
  async getGreeting(): Promise<GreetData> {
    // Simulate fetching data from a data source (e.g., API, database)
    return { message: "Hello, Remix with MVVM and Repository!" };
  },
};

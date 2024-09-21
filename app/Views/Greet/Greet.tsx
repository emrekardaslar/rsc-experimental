import GreetViewModel from "./ViewModel";
import { useEffect } from "react";

const Greet = () => {
  const { message, error, loadGreeting } = GreetViewModel();

  useEffect(() => {
    loadGreeting();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
};

export default Greet;

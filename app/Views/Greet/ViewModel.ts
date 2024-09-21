import { useState } from "react";
import { GreetRepository } from "../../repository/GreetRepository";

export default function useGreetViewModel() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function loadGreeting() {
    try {
      const data = await GreetRepository.getGreeting();
      setMessage(data.message);
    } catch (err) {
      setError("Failed to load greeting");
    }
  }

  return {
    message,
    error,
    loadGreeting,
  };
}

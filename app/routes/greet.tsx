// app/routes/greet.tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Loader for the 'greet' route
export async function loader() {
  return json({ message: "Hello, Remix with Vitest!" });
}

export default function Greet() {
  const { message }: any = useLoaderData();

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  });

  return <h1>{count}</h1>;
}

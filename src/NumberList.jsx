import { useState, useMemo } from "react";

export default function NumberList() {
  const [count, setCount] = useState(0);

  const numbers = [1, 2, 3, 4, 5, 6];

  const evenNumbers = useMemo(() => {
    return numbers.filter((num) => num % 2 === 0);
  }, [numbers]);

  return (
    <>
      <h3>Even Numbers:</h3>
      <ul>
        {evenNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter ({count})
      </button>
    </>
  );
}

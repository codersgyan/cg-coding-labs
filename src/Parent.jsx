import React, { useState } from "react";

const Button = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Child Button</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("Button clicked");
  }

  return (
    <>
      <h2>Counter: {count}</h2>
      <Button onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </>
  );
}

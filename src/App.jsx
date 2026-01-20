export default function App() {
  function updateText() {
    document.getElementById("title").innerText = "Hello";
  }

  return (
    <>
      <h1 id="title">Hi</h1>
      <button onClick={updateText}>Change</button>
    </>
  );
}

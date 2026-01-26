import React from "react";
import "./App.css";
const labData = {
  title: "Coder's Gyan",
  welcomeMsg: "Your environment is ready. Let's solve this challenge!",
  status: "ready_to_compile",
};
const App = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">{labData.title}</h1>
        <p className="subtitle">{labData.welcomeMsg}</p>

        <div className="status-tag">
          <code>system_status: {labData.status}</code>
        </div>
      </div>
    </div>
  );
};

export default App;

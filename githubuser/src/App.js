import React from 'react';
import './App.css';
import GitUser from "./components/GitUser";
import GitFollower from "./components/GitFollower";

function App() {
  return (
    <div className="App">
      <GitUser />
      <GitFollower />
    </div>
  );
}

export default App;

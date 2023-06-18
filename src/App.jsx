import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Screens/HomePage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default App;

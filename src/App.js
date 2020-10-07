import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Content />
      <div className="Player"></div>
    </main>
  );
}

export default App;

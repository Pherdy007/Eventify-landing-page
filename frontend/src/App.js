import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventifyLanding from "./components/EventifyLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EventifyLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
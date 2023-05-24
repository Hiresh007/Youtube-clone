import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import CardDisplay from "./components/CardDisplay";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "./state/StateContext";
const App = () => {
  const { display } = useStateContext();
  return (
    <div>
      <Navbar />
      {display && <Sidebar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/video" element={<CardDisplay />} />
      </Routes>
    </div>
  );
};

export default App;

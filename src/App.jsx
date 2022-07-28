import { useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import UserInput from "./components/UserInput";
import Pokedext from "./components/Pokedext";
import Pokemon from "./components/Pokemon";
import ProtectedRutes from "./components/ProtectedRutes";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UserInput />}></Route>

        <Route element={<ProtectedRutes/>}>
          <Route path="/pokedext" element={<Pokedext />}></Route>
          <Route path="/pokedext/:id" element={<Pokemon />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

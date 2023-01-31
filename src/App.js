import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header>
          <h1>BendJS</h1>
        </Header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

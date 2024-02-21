import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Article from "./components/Article";
import APropos from "./components/APropos";
import PageError from "./components/PageError";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Article />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Article from "./pages/Article";
import APropos from "./pages/APropos";
import PageError from "./pages/PageError";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Article />} />
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

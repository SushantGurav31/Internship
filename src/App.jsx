import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <main className="content">
        <Home />
      </main>

      <Footer />

    </div>
  );
}

export default App;
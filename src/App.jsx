import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import "./App.css";
import UserLogin from "./Pages/UserLogin";
import StudentForm from "./Pages/StudentForm";
import AdminLogin from "./Pages/AdminLogin";

function App() {
  return (
    <div className="app">

      <Header />

      <main className="content">
        <Home />
      </main>

      <Footer />
      <StudentForm/>
      <AdminLogin/>
      <UserLogin/>

    </div>
  );
}

export default App;
// import React, { Component, useState } from "react";
import "./App.css";
import LeanForm from "./LeanForm";
import { userContext } from "./context/userContext";
console.log(userContext);
function App() {
  return (
    <userContext.Provider
      value={{ userName: "name1", name: "name2", email: "email" }}
    >
      <div className="App" style={{ marginTop: "250px;" }}>
        <LeanForm />
      </div>
    </userContext.Provider>
  );
}
export default App;






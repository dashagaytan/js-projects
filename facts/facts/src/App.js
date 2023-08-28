import React, { useState } from "react";
import Main from "./components/Main.js"
import Navbar from "./components/Navbar"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState)
  }
  return (
    <div className="container">
      <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
      <Main darkMode = {darkMode} />
    </div>
  );
}

export default App;

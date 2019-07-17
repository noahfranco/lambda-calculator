import React from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js"
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";

function App() {
  
  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Specials />
        <Numbers /> 
        <Operators /> 
        
      </div>
    </div>
  );
}

export default App;

import React from "react"; 
import Tweet from "./Tweet";

function App(){

  return(
    <div className="app">
      <Tweet name="Codeka"/>
      <Tweet name="John Snow"/>
      <Tweet name="Dev Ed"/>
      <Tweet name="Odicode"/>
    </div>
  );
}

export default App;
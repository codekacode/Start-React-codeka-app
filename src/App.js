import React, {useState} from "react"; 
import Tweet from "./Tweet";

function App(){
  const [users, setUsers] = useState([
    {name: "Codeka", message: "Hi I'm software developer jr"},
    {name: "Odicode", message: "Hi I'm software developer senior"},
    {name: "Ed", message: "Hi I'm youtuber"},
    {name: "Jhon Snow", message: "Hi I'm king"}
  ]);

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
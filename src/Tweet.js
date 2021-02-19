import React, {useState} from 'react';
import "./App.css"

function Tweet({name, message}){
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1);
  };

  return(
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <p>{count}</p>
      <button className="btn" onClick={increment}>Likes</button>
    </div>
  )
};

export default Tweet;
import React from 'react';

function Hello(){
  const sayHello = () => {
    console.log('Hola Codeka!')
  }
  return (
    <div>
      <h3>This is the hello component</h3>
      <button onClick={sayHello}>Say halo!</button>
    </div>

  );
}

export default Hello;
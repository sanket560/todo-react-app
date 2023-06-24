import './App.css'
import React from 'react';
import Todo from './Todo';
function App() {

  return (
    <>
      <div className='text-xl capitalize bg-slate-700 text-center h-14 py-2 text-white'>
        <p>
          {"🔖"} todo app using reactjs {"📒"}
        </p>
      </div>
      <Todo />
    </>
  );
}

export default App

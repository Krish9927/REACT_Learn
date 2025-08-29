import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter,setCounter]=useState(15)
  // let counter=5
  const addvalue = () =>{
    // console.log("clicked",counter);
    // counter=counter+1;
    if(counter < 20)
    setCounter(counter+1)
  }
  const removevalue=()=>{
     if(counter > 0)
    setCounter(counter-1);
  }
  return (
    <>
     <h1>THIS IS ROYAL RUMBLE</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addvalue}>ADD Value {counter}</button>
     <br/>
     <button onClick={removevalue}>Remove Value {counter} </button>
     <p>footer: {counter} </p>
    </>
  )
}

export default App

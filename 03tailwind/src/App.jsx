import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
 let myObj={
  username : "hitesh",
  age:21
 }
 let arr=[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 p-4 text-black'>Tailwind  test</h1>
    <Card username='KING KONG' channel="LoveOfThrones" myArr={arr}/>
    <Card username='PAPAJIBOL' />
    </>
  )
}

export default App

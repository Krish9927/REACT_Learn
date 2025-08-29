import React from 'react'  
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>INSIDE A MAIN FILE</h1>
    </div>
  )
}
const anotheruser="EKE ELIVISH BHAI KE AAGE KOI BOL SKTA HE KYA"
const anotherele=(
  <a href="https://google.com" target='_blank'>GOOGLI</a>
)
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me 2 visit google',
  anotheruser
)
createRoot(document.getElementById('root')).render(
 reactElement
)

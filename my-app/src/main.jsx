import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
// import './index.css'
import App from './App.jsx'
import Practice from './index.jsx'

// here we just import a function from app.jsx which is used below <Practice />,
// this is also if we see is a function, so if i make a function in this file, 
// this will also be show below as it is purely javascript
function CustomApp(){
  return(
    <button>Custom button</button>
  )
}


// We can also make custom elements for the rendering 
// but it should be as per the requirement of render function 
// below, only then it will be able to render it 
const customElement = (
  <a href="https://google.com" target='_blank' >Visit google</a>
)


// Below in render we can actually just call a function that we created above also
// it is not just a good Practice and causes problem in optimization 
function CustomFunction(){
  return(
    <h1>Custom function return</h1>
  )
}

const anotherUser = "BROOOOOO"

// How to create React Element /
const reactElement = React.createElement('a',
  {href: 'https://google.com', targe: '_blank'},
   'click here bro',
  anotherUser)

createRoot(document.getElementById('root')).render(
  // <>
    //  <Practice />
  //    <h3>Test h3</h3>
  //    <p>Test para</p>
  //    <button>Test button</button>
  //    <CustomApp />
  //    CustomFunction()
  // </>
  // customElement
  reactElement
  // <App/>
)

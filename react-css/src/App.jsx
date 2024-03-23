// HOW TO STYLE REACT COMPONENTS WITH CSS
//----------------------------------------
//(not including any external frameworks or preprocessors)

//1. EXTERNAL - in an external file ; great for global styles or small projects
//2. MODULES - for individual components that have their own unique styles
//3. INLINE - any small component with its own unique styling

import Button from "./Button.jsx"

function App() {
  return(
  <>
      <Button/>
  </>)
}

export default App

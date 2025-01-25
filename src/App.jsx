import { useState } from 'react'
import './App.css'
import Model from './model'

function App() {
  const [model, setModel] = useState(false)
  
  const showModel =()=>{
     setModel(!model)
  }

  const handleOutsideClick = (e) => {
   
    console.log(e.target.className)
    if (e.target.className === "app-container") {
      setModel((value)=> value = false)
    }
  };


  return (
    <div className= {model ?  "app-container" : "app" } onClick={handleOutsideClick} >

    <div className={ model ? "btn-close" : "btn-open"}>
    <button onClick={showModel}>Show offer</button> 
    </div>  
    <div className={model ? "modelOpen" : "modelClose"}>
    <Model model={model} setModel={setModel}/>

    </div>  

    
    </div>
  )
}

export default App

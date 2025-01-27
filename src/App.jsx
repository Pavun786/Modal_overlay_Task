import { useState } from 'react'
import './App.css'
import Model from './model'

function App() {
  const [model, setModel] = useState(false);
  const [offer,setOffer] = useState(false)
  
  const showModel =()=>{
     setModel(!model)
  }

  const handleOutsideClick = (e) => {
   
    console.log(e.target.className)
    if (e.target.className === "app-container") {
      setModel((value)=> value = false)
    }
  };

  console.log(model,offer)

  return (
    <div className= {model ?  "app-container" : "app" } onClick={handleOutsideClick} >

    { model == false && offer == false ? <button onClick={showModel}>Show offer</button> : null }

    { model == false && offer == true ? <div>Offer accepted</div> : null }

     <div className={model ? "modelOpen" : "modelClose"}>
    <Model model={model} setModel={setModel} offer={offer} setOffer={setOffer}/>

    </div>  

    
    </div>
  )
}

export default App

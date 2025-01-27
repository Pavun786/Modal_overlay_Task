import { useState } from "react";




 function Model({model,setModel,offer,setOffer}){

   
      
    const closeFunction = () =>{
        setModel((prev)=> prev = false)
    }

    const acceptOffer = () =>{
        setOffer((value)=> value = true)
        setModel((prev)=> prev = false)
    }

    return(
        <>
        <div className={offer ? "hide-model-container" : "model-container"}>
        <button onClick={closeFunction} className="close-btn">X</button>
        <div className="model-sub">
        <div className="model-des">click the below button below to accept our amazing offer</div>
        <button onClick={acceptOffer} className="model-btn">Accept offer</button>
        </div>
        </div>
        
        </> 
    )

 }

 export default Model;
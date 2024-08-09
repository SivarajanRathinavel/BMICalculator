import React, { useState } from 'react'

export const BmiCalc = () => {
const [height, setHeight] = useState("")
const [weight, setWeight] = useState("")
const[bmi, setBmi] = useState(null);
const[status, setStatus] = useState("")
const[error, setError] = useState("")
console.log(bmi)
const calculate = () =>{
  const isValidHeight = /^\d+$/.test(height);
  const isValidWeight = /^\d+$/.test(weight);
  if(isValidHeight && isValidWeight){
   
    const HeightInMeters = height/100;
    const bmi = weight/(HeightInMeters+HeightInMeters);
    setBmi(bmi.toFixed(2))
    if(bmi < 18.5){
      setStatus("Under Weight")
    }
    else if (bmi > 18.5 && bmi <= 24.5)
    {
      setStatus("Normal Weight")
    } else if (bmi > 24.5 && bmi <= 29.9){
      setStatus("Over Weight")
    }
    else{
      setStatus("Obeese")
    }
    setError("")
  }
  else{
    setError("Enter valid height & weight(numeric)")
    setBmi(null)
    setStatus("")
  }
}
const clear = () =>{
  setHeight("")
  setWeight("")
  setStatus("")
  setBmi(null)
}

  return (
    <>
    <div className='container'>
        <div className="block">
        

    
<div className="inner-container">
  
    <div className="input-container">
        <h3>BMI Calulator</h3>   
        {error &&<p className='error'>*provide valid numerical  height and weight value  </p> }
<label htmlFor="height">Height</label>
    <input type="text" name="" id="height" value = {height}  onChange={(e)=>setHeight(e.target.value)}/>
    <label htmlFor="weight">Weight</label>
    <input type="text" name="" id="weight" value = {weight} onChange={(e)=>setWeight(e.target.value)}/>

    </div>
    <div className="button">
      <button type="button" className='calculate' onClick={calculate}>Calculate</button>
      <button type="button" className='clear' onClick={clear}>Clear</button>
    </div>
   {bmi !== null &&  <div className="content">
          <p>BMI: {bmi}</p>
          <p>Status: {status}</p>
          
        </div> }
        </div>
        
    </div>
    </div>
    </>
    
  )
}

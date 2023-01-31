// import React from 'react'
// import React, {useState} from 'react'
// const [count, setText] = useState('enter text here');

import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
const addCss = { }
addCss.backgroundColor = "red";
// console.log(addCss)


// const setStyle = {
//     backgroundColor : "black",
//     color : "white"
// }

export default function Textform(props) {
const handleUpClick = ()=>{
    // console.log("this is the value faisal" + text)
    const set = text.toUpperCase();
    setText(set)
    props.showAlert("Convert to uppercase","success")
}
const handleLoClick = ()=>{
  const setLower = text.toLowerCase();
  setText(setLower)
  props.showAlert("Convert to Lowercase", "success")
}
const handleClear = ()=>{
  const setLower = "";
  setText(setLower)
  props.showAlert("Clear Text", "success");
}

const handleOnClick = (event)=>{
    // console.log("change the value")
    setText(event.target.value)
}



const [text, setText] = useState(''); 

  return (
    <>
    <div className='cont'>
    <h1 className='heading' style={{color : props.mode === "dark"?"white":"black"}}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  id="myBox" value= {text} onChange={handleOnClick} style = {{backgroundColor : props.mode === "dark" ? "black" : "white", color : props.mode === "dark"?"white":"black"}} rows ={10} cols = {23} ></textarea>
</div >
<div className='btn' >
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
<button className='btn btn-primary' onClick = {handleLoClick}>Convert to lowercase</button>
<button className='btn btn-primary' onClick = {handleClear}>Clear Text</button>
<button className='btn btn-primary'>Convert to </button>
<button className='btn btn-primary'>Convert to uppercase</button>
</div>
<div className="container my-2" style = {{color : props.mode === "dark" ? "white" : "black"}}>
  <h1>Your Text Summary</h1>
  <p> {text.split(" ").length} words, {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text.length>0? text : "Enter Something to preview it here"}</p>
</div>
</div>
<Outlet/>
    </>
  )
}

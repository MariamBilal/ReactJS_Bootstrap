import React, { useState } from 'react'

export default function Textform(props) {
    
  const [text, setText] = useState('')

  const handleUPC = () => {
    let newtext = text.toUpperCase()
    setText(newtext)
  }

  
  const handleLC = () => {
    let newtext = text.toLocaleLowerCase()
    setText(newtext)
  }

  const handleOnChange = (event) => {
    console.log("handleOnChange")
    setText(event.target.value)
  }
  return (
    <div className='container my-3' style = {{color: props.mode==='dark'?'white':'black'}}>

        <h2> {props.heading}</h2>

        <div className="mb-3">    
            <label htmlFor="textarea" className="form-label">Textarea</label>
            <textarea className="form-control" style = {{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="textarea" rows="5" value={text} onChange={handleOnChange}></textarea>
        </div>

        <button className='btn btn-primary ' onClick={handleUPC}> Convert to Upper case</button>
        <button className='btn btn-primary mx-5'  onClick={handleLC}> Convert to Lower case</button>

        <div className="mb-3">    
            <h2> Text Summary</h2>
            <p> Your text contain {text.split(" ").length} words and {text.length} character</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>

    </div>
  )
}

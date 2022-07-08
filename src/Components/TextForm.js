import React, { useState } from "react";


export default function TextForm(props) {
    // Convert to uppercase
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    // Convert to Lowercase
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    // Clear textarea
    const handleClearClick = () =>{
        setText("");
        props.showAlert("Cleared textbox", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
        
    }

    // Copy Text
    const handleCopy = (event) =>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    // Remove Extra space
    const handleRemoveSpace = (event) =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed", "success");
    }
    
    const [text, setText] = useState('Enter text here');
    // text = "new text"; // wrong way to change the state
    // setText("asdda"); // Correct way to change the state
  return (
    <>
    
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-danger mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-info mx-2" onClick={handleRemoveSpace}>Remove extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it."}</p>
    </div>
    </>
  );
}

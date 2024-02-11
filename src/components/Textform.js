import React, {useState} from "react";

export default function Textform(props) {
const handleUpclick=()=>{

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase", "success");
}
const handleLoclick=()=>{

  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert(" Converted to Lowercase", "success");
}
const handleClearclick=()=>{

  let newText ='';
  setText(newText);
  props.showAlert(" Cleared Text", "success");
}
const handleOnChange=(event)=>{
    setText(event.target.value);
}
const handleCopytxt=()=>{
  let text = document.getElementById("my_box");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert(" Copied to Clipboard", "success");
}
const handleExtraSpaces=()=>{
  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "));
  props.showAlert(" Extra Spaces removed", "success");
}
    const [text, setText] = useState("Enter the text here");
  return (
    <>
    <div className="container">
          <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control pt-1" id="my_box" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="7"></textarea>
        </div>
          <button className="btn btn-primary my-2" onClick={handleUpclick}>Convert to uppercese</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleLoclick}>Convert to Lowercese</button>
          <button className="btn btn-primary my-2 " onClick={handleClearclick}>Clear Text</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleCopytxt}>Copy Text</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    
      <div className="container my-2">
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words and {(text.length+1)-(text.split(" ").length)} characters</p>
      <p>{0.008*text.split(" ").length} minutes taken to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter text in the above textbox to get peview here"}</p>
    </div>
    
    </>
  );
}

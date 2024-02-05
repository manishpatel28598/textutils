import React, {useState} from "react";

export default function Textform(props) {
const handleUpclick=()=>{

    let newText = text.toUpperCase();
    setText(newText);
}
const handleOnChange=(event)=>{
    setText(event.target.value);
}

    const [text, setText] = useState("Enter the text here");
  return (
    <div>
      <div className="container my-5">
        <div className="mb-3 ">
          <h1>{props.heading}</h1>
          <textarea className="form-control pt-1" id="my_box" value={text} onChange={handleOnChange} rows="7"></textarea>
          <button className="btn btn-primary my-2" onClick={handleUpclick}>
            Convert to uppercese
          </button>
        </div>
      </div>
    </div>
  );
}

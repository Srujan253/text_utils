import React,{useState} from 'react';
import './textbar.css';

export default function Textbar(props) {
  const [text, setText] = useState("Enter Text Here");
  const Handleclick = () => {
    console.log("Onclick");
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const HandleOnChange=(event)=>{
    setText(event.target.value)
  }
  const Handlesmall = () =>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const Handlenormal = () =>{
    setText("Enter Text Here")
  }

  const Handlecopy = () => {
    const textarea = document.getElementById("mybox"); // Correct ID
    if (textarea) {
      textarea.select(); // Select the text
      textarea.setSelectionRange(0, textarea.value.length); // For mobile browsers
      navigator.clipboard
        .writeText(textarea.value)
        .then(() => {
          alert("Text Copied!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      alert("Textarea not found!");
    }
  };
  

  const HandleExtraspace = () =>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  return (
    <>
    <div className="container mt-2" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
    <h1><label HTMLfor="floatingTextarea">Enter text here</label></h1>
        <textarea className="form-control mybox" value={text} id="mybox" style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white' , color: props.mode==='dark' ? 'white' : 'black'}} rows="10"  onChange={HandleOnChange}></textarea>
    <div className="container mt-2"  >
      <button className="btn btn-dark me-2" onClick={Handleclick} >Convert to uppercase</button>
      <button className="btn btn-dark me-2" onClick={Handlesmall}>Convert to lowercase</button>
      <button className="btn btn-dark me-2" onClick={Handlenormal}>Reset</button>
      <button className="btn btn-dark me-2" onClick={Handlecopy}>Copy Text</button>
      <button className="btn btn-dark" onClick={HandleExtraspace}>Remove Extra Space</button>


    </div>
    <div className="conatiner mt-2" >

    <h2>Preview</h2>
    <p>{text}</p>
       <h2>Summary of the Text</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Approximatly {0.008 * text.length * 60} Seconds to read the text</p>
    </div>

    </div>
    </>
  )
}

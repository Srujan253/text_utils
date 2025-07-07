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
    <div className="textbar-funbox" style={{color: props.mode==='dark' ? 'white' : 'black', background: props.mode==='dark' ? 'linear-gradient(120deg, #232526 0%, #414345 100%)' : undefined}}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: props.mode === 'dark' ? '#fff' : '#111',
        textShadow: props.mode === 'dark'
          ? '0 0 12px #43c6ac, 0 0 24px #43c6ac88, 0 2px 8px #222'
          : '0 0 8px #43c6ac22, 0 2px 8px #fff7'
      }}>
        <label htmlFor="floatingTextarea">Enter text here</label>
      </h1>
      <textarea className="form-control mybox" value={text} id="mybox" style={{backgroundColor: props.mode==='dark' ? '#333' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} rows="10"  onChange={HandleOnChange}></textarea>
      <div style={{textAlign:'center'}}>
        <button className="btn me-2" onClick={Handleclick} >UPPERCASE</button>
        <button className="btn me-2" onClick={Handlesmall}>lowercase</button>
        <button className="btn me-2" onClick={Handlenormal}>Reset</button>
        <button className="btn me-2" onClick={Handlecopy}>Copy</button>
        <button className="btn" onClick={HandleExtraspace}>Remove Spaces</button>
      </div>
      <div style={{marginTop:'2rem'}}>
        <h2 style={{color: props.mode === 'dark' ? '#fff' : '#111'}}>Preview</h2>
        <p style={{
          background: props.mode === 'dark' ? '#222c' : '#fff8',
          borderRadius: '8px',
          padding: '0.7rem',
          minHeight: '2rem',
          color: props.mode === 'dark' ? '#fff' : '#111'
        }}>{text}</p>
        <h2 style={{color: props.mode === 'dark' ? '#fff' : '#111'}}>Summary</h2>
        <p style={{color: props.mode === 'dark' ? '#fff' : '#111'}}><b>{text.split(" ").filter(Boolean).length}</b> words & <b>{text.length}</b> characters</p>
        <p style={{color: props.mode === 'dark' ? '#fff' : '#111'}}>~ <b>{(0.008 * text.split(" ").filter(Boolean).length * 60).toFixed(1)}</b> seconds to read</p>
      </div>
    </div>
    </>
  )
}

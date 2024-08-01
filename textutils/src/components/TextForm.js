import React, {useState} from 'react'


export default function TextForm(props) {
  console.log(props.mode)
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        //console.log("Upper handle event");
        setText(newText);
        props.showAlert("Text changed to Upper Case", "success");
    }

    const handleLoClick = ()=> {
      let newText = text.toLowerCase();     
      setText(newText);
      props.showAlert("Text changed to Lower Case", "success");
  }

  const handleClearClick = ()=> {
    let newText = "";     
    setText(newText);
    props.showAlert("Text Cleared", "success");
}

const handleReadClick = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

const handleInverseClick = () => {
  let newText = "";
  for(let i= text.length-1; i >= 0; i--)
  {
    newText += text[i];
  }

  setText(newText);

}

const handleCopyClick = ()=> {
  let newText = document.getElementById("myBox");
  newText.select();
  navigator.clipboard.writeText(newText.value);
}

const handleExSpaceClick = ()=> {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}
   const handleOnChange = (event)=> {
    //console.log("Text on change");
    setText(event.target.value);
   }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h1 className='mb-4'>{props.Heading}</h1>
    <div className="mb-3">        
        <label htmlFor="mybox" className="form-label"></label>
        <textarea className="form-control" id="myBox" rows="8" value = {text} onChange={handleOnChange}
        style={{backgroundColor: props.mode === "dark" ? "#13466e": "white", color: props.mode === "dark" ? "white": "#042743"}}
        ></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} disabled={text.length===0}>Convert to Upper Case</button>
    <button className="btn btn-success mx-1" onClick={handleLoClick} disabled={text.length===0}>Convert to Lower Case</button>
    <button className="btn btn-secondary mx-1" onClick={handleClearClick} disabled={text.length===0}>Clear Text</button>
    <button className="btn btn-info mx-1" onClick={handleReadClick} disabled={text.length===0}>Read Text</button>
    <button className="btn btn-warning mx-1" onClick={handleInverseClick} disabled={text.length===0}>Inverse Text</button>
    <button className="btn btn-info mx-1" onClick={handleCopyClick} disabled={text.length===0}>Copy Text</button>
    <button className="btn btn-warning mx-1" onClick={handleExSpaceClick} disabled={text.length===0}>Remove Extra Space</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
</>
  )
}

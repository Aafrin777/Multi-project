// -----------HOOKS---handling events------convertor project------------------

import React, { useState } from "react";


export default function TextForm(props) {

  //uppercase
  //to create upperclick function
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text); //we will be able to access text variable by + text

    let newText = text.toUpperCase();
    setText(newText); //to set text after function work
    props.showAlert(" Converted to Uppercase", "success");
  };

  //Lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase", "success");
  };

  //clear Text
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert(" Text has cleared", "success");
  }

  //copy text
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text copied successfully", "success");
  };

//Remove Extra spaces
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert(" handled space", "success");
}

  //we able to write in form
  const handleOnChange = (event) => {
    setText(event.target.value); //we able to write in form handling events
  };

  const [text, setText] = useState("");
  //text is state here
   // text = "new text"; wrong way to update the state
  // setText("new text"); correct way
  return (
    <>
      <div className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black', // Text color change based on mode
        }}
    >
        <h1>project 2 adding more features</h1>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}

            style={{
              backgroundColor: props.mode === 'dark' ? '#333' : 'white', // Dark mode background for textarea
              color: props.mode === 'dark' ? 'white' : 'black', // Text color change
            }}

            id="mybox"
            rows="4"
          ></textarea>
        </div>
{/* in style we used 2 bracket one for java second for object  AND we are saying if out props.mode is dark is become black otherwise remain light*/}

        {/* here we created onClicked running function and named it handleUpClick */}

        <button className="btn btn-danger mx-2 " onClick={handleUpClick}>
          convert to uppercase
        </button>

        <button className="btn-primary" onClick={handleLoClick}>
          convert to Lowercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-success mx-3" onClick={handleCopy}>
          Copy Text
        </button>


        <button className="btn btn-success mx-3 my-3" onClick={handleExtraSpaces}>
        HandleExtraSpaces
        </button>
      </div>

    </>
  );
}

/*
STYLE : green = success , primary = blue , danger = red

difference between props and hooks amd states :

-> props are passed from parent to child component

HOOKS :  function base
-> Hooks are used to access state and other features of react in functional components

-> Hooks are used to manage state and side effects in functional components

-> they let you use STATEand other React features without writting a class



-> UseState is HOOKS to decide present state of application


STATE :
-> State is used to store data in class components

-> State belongs to components which is used to store data in class components

example :-> text is state here

const [text, setText] = useState("enter text here");
-> text is state here
-> text = "new text"; wrong way to update the state
-> setText("new text"); correct way

-> we are using variable named text and to update text .....setText ("newName"); after this our text value will update and instead of ('enter text here') it will become ("newName") this

*/

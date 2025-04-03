// -----------HOOKS---handling events------convertor project------------------

import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("enter text here");
  //text is state here

  //setText("new text");  In case wanna change text



  //to create upperclick function
  const handleUpClick = (props) => {

    console.log("Uppercase was clicked" + text); //we will be able to access text variable by + text

    let newText = text.toUpperCase();
    setText(newText); //to set text after function work
    //setText("new text");{
    // props.showAlert(" Converted to Uppercase", "success");

  };

  //we able to write in form
  const handleOnChange = (event) => {
    setText(event.target.value); //we able to write in form handling events
    // props.showAlert(" Changes happened", "success");
  };


  return (
    <>

      <div className="container my-5"

style={{
  color: props.mode === "dark" ? "white" : "black",
  backgroundColor: props.mode === "dark" ? "#092635" : "white",
  border: "2px solid white",
  boxShadow: props.mode === "dark"
    ? "5px 5px 20px rgba(17, 0, 172, 0.85)"
    : "15px 5px 15px rgba(17, 8, 2, 0.77)",
  padding: "20px",
  borderRadius: "10px",
  transition: "all 0.3s ease",
}}
         >

        <h1>{props.heading}</h1>

        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"

            style={{
              backgroundColor: props.mode === "dark" ? "#1B4242" : "#F5F5F5",
              color: props.mode === "dark" ? "white" : "black",
              border: "1px solid #ddd",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              width: "100%",
              height: "120px",
              resize: "none",
            }}
          ></textarea>
        </div>

        {/* here we created onClicked running function and named it handleUpClick */}

        <button className="btn btn-danger mx-5 " onClick={handleUpClick}>
          convert to uppercase
        </button>




      {/* --------------summary--COUNT---------- */}

      <div
       className="container my-2"
       style={{
        color: props.mode === "dark" ? "yellow" :"black",
        backgroundColor: props.mode === "dark" ? "#081C15" : "#f9f9f9",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: props.mode === "dark"
          ? "5px 5px 20px rgba(109, 116, 216, 0.93)"
          : "5px 5px 15px rgba(0, 0, 0, 0.2)",
      }}

       >
      <h2>your text summary</h2>
{/* -----------for words-------------------for chanacters */}
      <p>{text.split(" ").length} words and {text.length} characters</p>

      <p>{0.008 * text.split(" ").length} minutes time taken to read</p>

      <h2>Preview</h2>
   <p>{text}</p>        {/*  text we set by state */}
    </div>
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

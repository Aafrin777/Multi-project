//STATE: convert to upper case
//UseState HOOKS to decide present state of application

import React, { useState } from "react";

export default function Color(props) {

  const [text, setText] = useState("");

  // Convert to Uppercase
  const handleUpClick = () => setText(text.toUpperCase());


  // Convert to Lowercase
   const handleLoClick = () => {
let newText = text.toLowerCase();
    setText(newText)
  }

  // Clear Text
  const handleClearClick = () => setText("");
  /*
  let newText =" ";
        setText(newText)
      }
  */

  // Copy Text
  const handleCopy = () => {
    var text =document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    //this will work too
    //navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  // Handle Input Change
  const handleOnChange = (event) => setText(event.target.value);

  return (
    <>
      {/* Main Container */}
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "#092635" : "white",
          border: "2px solid white",
          boxShadow: props.mode === "dark"
            ? "5px 5px 20px rgba(0, 255, 150, 0.5)"
            : "5px 5px 15px rgba(58, 19, 151, 0.77)",
          padding: "20px",
          borderRadius: "10px",
          transition: "all 0.3s ease",
        }}
      >
<h1>{props.heading} {text}</h1>
        <h1>{props.heading}</h1>

        {/* Text Area */}
        <div className="mb-3">

{/* on change event listen so we could write on form */}

          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Type something..."
            id="mybox"

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

        {/* Buttons */}
        <div className="button-group">
          <button className="btn btn-success"
          onClick={handleLoClick}>
            Convert to Lowercase
          </button>

          <button className="btn btn-green"
           onClick={handleUpClick}>
            Convert to Uppercase
          </button>

          <button className="btn btn-red"
           onClick={handleClearClick}>
            Clear Text
          </button>

          <button className="btn btn-blue"
           onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>

      {/* Text Summary Section */}
      <div
        className="container my-5"
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
        <h2>Text Summary</h2>

      <p>4000 words and {text.length} characters</p>

      <p>
        {text.split(" ")
      .length} words and {text.length} characters
      </p>

{/*  we fixed issue where it was couting black as worlds */}
<p>
          {text.split(" ")
          .filter((word) => word !== "")
          .length} words and {text.length} characters
        </p>

        <p>Estimated Read Time: {0.008 * text.split(" ").length} minutes read</p>

        <h2>Preview</h2>
        <p
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#fff",
            color: "black",
            minHeight: "50px",
          }}
        >
          {text.length > 0 ? text : "Enter text to preview here"}
        </p>
      </div>

      {/* Styles */}
      <style>
        {`
          .btn {
            margin: 5px;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .btn:hover {
            transform: scale(1.05);
            box-shadow: ${
              props.mode === "dark"
                ? "0px 4px 10px rgba(0, 255, 150, 0.6)"
                : "0px 4px 10px rgba(0, 0, 0, 0.2)"
            };
          }

          .btn-green { background-color: #28a745; color: white; }
          .btn-red { background-color: #dc3545; color: white; }
          .btn-blue { background-color: #007bff; color: white; }

          .button-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}





       {/* my-...define top distance     AND style to balance color of text base on mode*/}
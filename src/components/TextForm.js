/** @format */

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleSentenceFormatClick = () => {
    let newText = text.toLowerCase();
    newText = newText.replace(/(^\w|\.\s\w)/gi, (char) => char.toUpperCase());
    setText(newText);
     props.showAlert("Fix Sentence!", "success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
     props.showAlert("Clear Text!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("Enter text here 2");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading} </h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            }}
            onChange={handleOnChange}
            id="MyBox"
            rows="7"></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>
          Convert To UperCase
        </button>
        <button className="btn btn-primary m-1" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={handleSentenceFormatClick}>
          Convert To Sentence Format
        </button>
        <button className="btn btn-success m-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your Text summary</h2>
        <p>
          {" "}
          {text.split(". ").length} Lines, {text.split(" ").length} words and{" "}
          {text.length} characters
        </p>

        <p>{0.008 * text.split(" ").length}Minuets read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}

import React, { useState } from "react"; // we have import usestates which is a hook in react and we use hooks so that we can use class functions without creating class

// Declare a new state variable, which we'll call "count or text etc"

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
  };

  // how to Handle Events
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text"; - wrong way to change the state
  // settext("new text"); - correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }} // we have added double curlys 1 for javascript and 2nd for objects in javascript
            id="myBox"
            rows="8"
          ></textarea>
          {/* we used onchange because we wanted to add the text as well inside the box before this wasn't happing */}
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
      </div>
    </>
  );
}

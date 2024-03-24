import React from "react";
import "../styles.css";
function Form() {
  const flexContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "80%",
    backgroundColor: "#dfdcd9",
    padding: "1rem",
    boxShadow: "0 0 20px -6px purple",
  };

  const textStyle = {
    padding: "0.5rem",
    border: "none",
    marginTop: "0.4rem",
  };
  return (
    <header class="head">
      <div style={flexContainer}>
        <h1>Talk with our team</h1>
        <div className="input_fields">
          <div className="name">
            First Name :
            <input type="text" placeholder="e.g., Tom" />
            Last Name :
            <input type="text" placeholder="Hardy" />
          </div>
          <div className="contact">
            Email :
            <input type="email" placeholder="e.g., 6kqzA@example.com" />
            Phone no :
            <input type="tel" placeholder="e.g., 555-555-5555" />
          </div>
        </div>
        <div className="message">
          What would you like to discuss?
          <textarea
            name=""
            id=""
            cols="70"
            rows="10"
            style={textStyle}
            placeholder="Tell us something that you would like to know about us..."
          ></textarea>
        </div>
        <button>Submit</button>
      </div>
    </header>
  );
}

export default Form;

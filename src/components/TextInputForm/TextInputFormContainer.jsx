import TextInputForm from "./TextInputForm";
import { useState } from "react";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  //   const [value, setValue] = useState("");
  let value = "";

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submitted", value);
  }

  function handleShowHideClick() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }

    console.log("input type changed to", inputType);
  }

  function handleTextInputChange(event) {
    // setValue(event.target.value);
    value = event.target.value;
    console.log(value);
  }

  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleShowHideClick={handleShowHideClick}
      handleTextInputChange={handleTextInputChange}
    />
  );
}

export default TextInputFormContainer;

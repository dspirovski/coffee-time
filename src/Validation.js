import React from "react";

function Validation(props) {
  let validationMessage = "Text too long";

  if (props.value.length < 6) {
    validationMessage = "Text too short.";
  }

  return <div>{validationMessage}</div>;
}

export default Validation;

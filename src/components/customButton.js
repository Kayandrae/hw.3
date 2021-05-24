  
import React from "react";
import "./editButton.css";

const CustomButton = (props) => {

  return (
    <div>
      <button onClick={props.clicked} className={props.styleName}>
        {props.stateChanged ? "Edit Off" : "Edit On"}
      </button>
    </div>
  );
};
export default CustomButton;
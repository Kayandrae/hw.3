import React from "react";
import "./editButton.css";
import CustomButton from "./customButton";
import Pad from './pad.jsx';
import PadDesign from './designPad.jsx';

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inEditMode: true,
      // button_clickability: 'editButton_enabled'
    };
  }

  changedEditMode = () => {
    this.setState((state) => ({ inEditMode: !state.inEditMode }));
  };

  render() {
    let colorStyle = null;
    if (this.state.inEditMode) {
      colorStyle = "editButton_enabled";
    } else {
      colorStyle = "editButton_disabled";
    }

    return (
      <div className="editButtonDiv">
        <p style={{ textAlign: "center" }}>Button is working fine now</p>
        <div className="buttonStyle">
          <CustomButton
            styleName={colorStyle}
            clicked={this.changedEditMode}
            stateChanged={this.state.inEditMode}
          />
        </div>
        <div style={{display: 'flex'}}>
          <Pad buttonState = {this.state.inEditMode}/>
          <PadDesign />
        </div>
        

      </div>
    );
  }
}

export default EditButton;
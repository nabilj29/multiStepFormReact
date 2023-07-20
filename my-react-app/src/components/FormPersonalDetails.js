import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          {/* add button from html/js with onclick listner here */}
          <button style={continueButtonStyles} onClick={this.continue}>
            Continue
          </button>
          <button class="backButton" style={backButtonStyles} onClick={this.back}>
            Back
          </button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const continueButtonStyles = {
    padding: "10px 20px",
    backgroundColor: "#00BCD4",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px", // Add margin to separate the buttons
  };

  const backButtonStyles = {
    padding: "10px 20px",
    backgroundColor: "#00BCD4",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

export default FormPersonalDetails;

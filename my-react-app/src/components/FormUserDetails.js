import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          {/* add button from html/js with onclick listner here */}
          <button
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </button>

    
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
    button: {
        padding: "10px 20px",
        backgroundColor: "#00BCD4",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      },
};

export default FormUserDetails;

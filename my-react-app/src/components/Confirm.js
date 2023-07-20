import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import { List, ListItem } from "material-ui/List";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>

          <br />
          {/* add button from html/js with onclick listner here */}
          <button style={continueButtonStyles} onClick={this.continue}>
            Confrim and Continue
          </button>
          <button
            style={backButtonStyles}
            onClick={this.back}
          >
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

export default Confirm;

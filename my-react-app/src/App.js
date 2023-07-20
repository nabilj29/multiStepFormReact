
import { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class App extends Component {
  render() {
    return(
    <div className="App">
      <UserForm/>
    </div>
  );
}
}

export default App;

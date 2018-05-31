import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  displayUserName(createdUser) {
    this.setState({createdUser})

    setTimeout(function () {
      this.props.history.push("/login")
    }.bind(this), 2000)

    // add something to history
  }

  handleClick (event) {
    let apiBaseUrl = "http://localhost:3001/"
    let body = {
      username: this.state.username,
      password: this.state.password
    }
    // key value pairs of username and password in body. We call it body

    axios.post(apiBaseUrl + 'signUp', body)

    .then( response => {
      let createdUserName = response.data.result
      this.displayUserName(createdUserName)
    })
    .catch(error => {
      throw Error
    })
  }
  render () {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Register" />
            <TextField hintText="Enter your username" floatingLabelText="username" onChange = {(event, newValue) => this.setState({username: newValue})} />
            <br/>
            <TextField hintText="Enter your password" floatingLabelText="password" onChange = {(event, newValue) => this.setState({password: newValue})} />
            <br/>
            <RaisedButton label="create" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
        <h3>{this.state.createdUser ? `${this.state.createdUser}  ` : '' }</h3>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;

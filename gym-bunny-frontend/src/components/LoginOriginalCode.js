import React from 'react';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import getAuthInstance from './AuthStore'


class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      loggedIn: false
    }
  }

handleClick = (event) => {
  let apiBaseUrl = "http://localhost:3001/"
  let payload = {
    username: this.state.username,
    password: this.state.password
  }

  axios.post(apiBaseUrl + 'login', payload)
  .then( (response) => {
    const token = response.headers.authorization.match(/Bearer: (.*)/)[1];

    const authStore = getAuthInstance();
    authStore.setToken(token);
    this.setState({ loggedIn: true });
  })

}

  render () {
    if (this.state.loggedIn) {
      return <Redirect to='/'/>;
    }

    return (
      <div>
          <MuiThemeProvider>
            <div>
            <AppBar title="Login"/>
            <TextField hintText= "Enter your username" floatingLabelText="Username" onChange = {(event, newValue) => this.setState ({username: newValue})}/>
            <br/>
            <TextField hintText="Enter your password" floatingLabelText="password" onChange = {(event, newValue) => this.setState ({password: newValue})} />
            <br/>
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
          </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};

export default Login

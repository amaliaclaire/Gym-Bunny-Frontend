import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

// code from demo
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';



const styles = theme => ({
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

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
        <MuiThemeProvider theme={theme}>
          <div>
            <AppBar style={{background: '#CE3175'}} title="Register" />
            <TextField label="MuiThemeProvider" id="mui-theme-provider-input" hintText="Enter your username" floatingLabelText="username" onChange = {(event, newValue) => this.setState({username: newValue})} />
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



export default withStyles(styles)(Register);

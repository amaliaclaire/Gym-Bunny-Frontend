import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import getAuthInstance from './AuthStore'

// code from demo
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import pink from '@material-ui/core/colors/pink'
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: pink[400],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: pink[400],
    },
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})


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
    const {classes} = this.props;

    if (this.state.loggedIn) {
      return <Redirect to='/'/>;
    }

    return (
      <div>
        <FormControl className={classes.margin}>
          <InputLabel id="username-login" FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
          htmlFor="custom-css-input"
          id="custom-css-input" >  Hello</InputLabel> 
        </FormControl>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
const style = {
  margin: 15,
};

export default withStyles(styles)(Login);

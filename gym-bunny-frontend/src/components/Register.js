import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

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
    const {classes} = this.props;
      return (
        <div>
          <FormControl className={classes.margin}>
            <InputLabel id="register-createUser"
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor="custom-css-input"
            >
              Create Username
            </InputLabel>
            <Input
              classes={{
                underline: classes.cssUnderline,
              }}
              id="custom-css-input" onChange = {(event, newValue) => this.setState({username: newValue})}
            />
          </FormControl>



          <FormControl className={classes.margin}>
            <InputLabel id="register-createPassword"
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor="custom-css-input"
            >
              Create Password
            </InputLabel>
            <Input
              classes={{
                underline: classes.cssUnderline,
              }}
              id="custom-css-input" onChange = {(event, newValue) => this.setState({password: newValue})}
            />
          </FormControl>

          <Button variant="contained" className={classes.button} primary={true} style={style} onClick={(event) => this.handleClick(event)} >
            Submit
          </Button>
          <h3>{this.state.createdUser ? `${this.state.createdUser}  ` : '' }</h3>
        </div>
      );
    }
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const style = {
  margin: 15,
};



export default withStyles(styles)(Register);

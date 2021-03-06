import React, { Component } from 'react';
import './App.css';
// import React from 'react';
import NavbarGymBunny from './components/NavbarGymBunny'
import ImageCard from './components/LandingPage'
import WorkoutForm from './components/WorkoutForm'
import ExerciseForm from './components/ExerciseForm'
import CompletedWorkout from './components/CompletedWorkout'
import Exercises from './components/Exercises'
import Login from './components/Login'
import LoginScreen from './components/LoginScreen'
import Register from './components/Register'
import MotivationQuotes from './components/MotivationQuotes'
import UpdateWorkoutForm from './components/UpdateWorkoutForm'
import { Route, Link, Switch } from 'react-router-dom'
import getAuthInstance from './components/AuthStore'
import withStyles from './components/withStyles'

const Pages = {
  LandingPage: 'landing page',
  ExerciseForm: 'exercise form',
  WorkoutForm: 'workout form',
  Workouts: 'workouts',
  Exercises: 'exercises',
  Login: 'login',
  LoginScreen: 'LoginScreen',
  Register: 'register',
  MotivationQuotes: 'MotivationQuotes',
  UpdateWorkoutForm: 'UpdateWorkoutForm',
  withStyles: 'withStyles'


}
class App extends Component {
  state = {
    appState: Pages.LandingPage
  };


  render() {
    //return <div>hello</div>
    return (
      <div className="App">
        <NavbarGymBunny></NavbarGymBunny>
        <Link to='/'></Link>
        <Link to='/workoutForm'></Link>
        <Link to='/exerciseForm'></Link>
        <Link to='/workout'></Link>
        <Link to='/workoutsWithExercises'></Link>
        <Link to='/login'></Link>
        <Link to='/loginScreen'></Link>
        <Link to='/register'></Link>
        <Switch>
        <Route exact path='/' component={ImageCard}/>
        <Route path='/workoutForm' component={WorkoutForm} />
        <Route path='/exerciseForm' component={ExerciseForm} />
        <Route path='/workout' component={CompletedWorkout} />
        <Route path='/workoutsWithExercises' component={Exercises} />
        <Route path='/login' component={Login} />
        <Route path='/loginScreen' component={LoginScreen} />
        <Route path='/register' component={Register} />
        <Route path='/MotivationQuotes'            component={MotivationQuotes} />
        <Route path='/UpdateWorkoutForm' component={UpdateWorkoutForm} />
        <Route path='/withStyles' component={withStyles} /> 
        </Switch>
      </div>
    );
  }
}

export default App;

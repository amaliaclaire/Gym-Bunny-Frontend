import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import React from 'react';
import ReactDOM from 'react-dom';
import NavbarGymBunny from './components/NavbarGymBunny'
import ImageCard from './components/LandingPage'
import WorkoutForm from './components/WorkoutForm'
import CompletedWorkout from './components/CompletedWorkout'
import Exercises from './components/Exercises'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


const Pages = {
  LandingPage: 'landing page',
  WorkoutForm: 'workout form',
  Workouts: 'workouts',
  Exercises: 'exercises'


}
class App extends Component {
  state = {
    appState: Pages.LandingPage
  };

  // onPlanWorkout = () => {
  //   this.setState({appState: Pages.WorkoutForm})
  // };
  //
  // renderPage() {
  //   if(this.state.appState === Pages.LandingPage) {
  //     return (
  //       <ImageCard
  //         onClickPlan={this.onPlanWorkout}
  //         />
  //     )
  //   } else if (this.state.appState === Pages.WorkoutForm) {
  //     return (
  //       <WorkoutForm/>
  //     )
  //   } else if (this.state.appState === Pages.Workouts) {
  //     return (
  //       <CompletedWorkout/>
  //     )
  //   }
  // }

  render() {
    //return <div>hello</div>
    return (
      <div className="App">
        <NavbarGymBunny></NavbarGymBunny>
        <Link to='/'></Link>
        <Link to='/workoutForm'></Link>
        <Link to='/workout'></Link>
        <Link to='/workoutsWithExercises'></Link>
        <Switch>
        <Route exact path='/' component={ImageCard}/>
        <Route path='/workoutForm' component={WorkoutForm} />
        <Route path='/workout' component={CompletedWorkout} />
        <Route path='/workoutsWithExercises' component={Exercises} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import CheckOff from './CheckOff'

let workoutId = 1

class Exercises extends React.Component {
  constructor (props) {
    super(props);
    this.state = {exercises: [], completed: []}
  }
  componentDidMount() {
    axios.get('http://localhost:3001/workouts/' + workoutId)
    .then(res => {
      const exercises = res.data
      const completed = res.data.map(e => {
        return false
      })
      this.setState({exercises})
    }).catch(err => console.log(err))
  }


  handleOnChecked(index) {
    const updatedState = Array.from(this.state.completed);
    updatedState[index] = !this.state.completed[index]
    this.setState({ completed: updatedState });
  }

  renderExerciseCard(name, reps, sets, weight, index) {
    return (
      <div key={index}>
        <Card body outline color="secondary">
          <CardTitle><h3>{name}</h3></CardTitle>
            <CardText>{sets} sets of {reps} reps</CardText>
            <CardText>Starting Weight: {weight} </CardText>
            <CheckOff checked={this.state.completed[index]} onClick={ e => {this.handleOnChecked(index)}}/>
       </Card>
      </div>
    )
  }

  render () {
    let workoutName = null

    if(this.state.exercises.length !== 0) {
      workoutName = this.state.exercises[0].workout_name
    }

    const exercisesInformation =  this.state.exercises.map((exercise, index) => {
      console.log('exercise:', exercise);
        return this.renderExerciseCard(exercise.name,exercise.reps, exercise.sets, exercise.weight, index)

    })
    return(
      <div>
        <h1>{workoutName}</h1>
        {exercisesInformation}
      </div>
    );
  }
}

export default Exercises;
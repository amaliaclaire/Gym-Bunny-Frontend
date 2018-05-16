import React from 'react';
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
      this.setState({exercises, completed})
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
          <CardTitle>{name}</CardTitle>
          <CardText>{sets} sets of {reps} reps</CardText>
          <CardText>Starting Weight: {weight} </CardText>
          <CheckOff
            checked={this.state.completed[index]}
            onClick={ e => {this.handleOnChecked(index)}}
          />
       </Card>
      </div>
    )
  }

  exercisesCompleted() {
    let count = 0

    this.state.completed.forEach(el => {
      if(el) {
        count++
      }
    })
    return (
      count
    );
  }

  render () {
    let workoutName = null

    if(this.state.exercises.length !== 0) {
      workoutName = this.state.exercises[0].workout_name
    }

    const exerciseCards =  this.state.exercises.map((exercise, index) => {
      console.log('exercise:', exercise);
        return this.renderExerciseCard(exercise.name,exercise.reps, exercise.sets, exercise.weight, index)

    })
    return(
      <div>
        <Button color="primary">Add Exercises</Button>{' '}
        <h1>{workoutName}</h1>
        {exerciseCards}
        {this.exercisesCompleted()} / {this.state.exercises.length}
      </div>
    );
  }
}

export default Exercises;

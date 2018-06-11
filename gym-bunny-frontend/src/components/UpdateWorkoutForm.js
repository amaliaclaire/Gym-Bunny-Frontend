import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import BasicWorkoutForm from './BasicWorkoutForm'
let workoutId; 


class UpdateWorkoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleSubmit = (name) => {

    const request = {
      name: this.state.name

    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/workouts')
    .then(res => {
      console.log('res:', res);
      this.setState({name: res.data})
    }).catch(err => console.log(err))
  }

  updateWorkout () {
    axios.put('http://localhost:3001/workouts' + workoutId)
    .then(res => {
      const workouts = res.data
      const workoutId = res.data.map(e => {
      let workoutId = e.id
    })
    this.setState({workoutId })
    }).catch(err => console.log(err))
  }


  render () {
    return (
      <BasicWorkoutForm name={this.state.name} verb={'Update Workout'} onAction={ this.handleSubmit} />
    );
  }
}

export default UpdateWorkoutForm;

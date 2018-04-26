import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    state = {
      workout_name: ''
    }

    handleChange = event => {
      this.setState({ workout_name: event.target.value });
    }

    handleSubmit = event => {
      event.preventDefault();

      const workoutSingleForm = {
        workout_name: this.state.workout_name
      }

    }
    // proptypes blah blah

    axios.post('http://', {workout_name})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Name of Workout</Label>
            <Input type="text" name="workout-name" id="workform-name" onChange={this.handleChange} />
          </FormGroup>
          <Button type="submit">Create Workout</Button>
        </Form>
      </div>
    );
  }
}

export default WorkoutForm;

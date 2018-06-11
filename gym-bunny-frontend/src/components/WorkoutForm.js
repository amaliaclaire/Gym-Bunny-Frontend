import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';



class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout_name: ''
    }
  }

  handleChange = event => {
    this.setState({ workout_name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();



    const request = {
      name: this.state.workout_name,
      user_id: 2
    };

    // proptypes blah blah
    axios.post('http://localhost:3001/workouts', request)
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

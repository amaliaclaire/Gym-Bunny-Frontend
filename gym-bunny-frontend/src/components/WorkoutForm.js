import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    // proptypes blah blah


  }
  render () {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>Name of Workout</Label>
            <Input type="text" name="workout-name" id="workform-name" />
          </FormGroup>
          <Button onClick={this.props.onCreateWorkout}>Create Workout</Button>
        </Form>
      </div>
    );
  }
}

export default WorkoutForm;

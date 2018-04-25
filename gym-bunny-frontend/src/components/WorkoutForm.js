import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>Name of Workout</Label>
            <Input type="text" name="workout-name" id="workform-name" />
          </FormGroup>
          <FormGroup>
           <Label>Weight</Label>
           <Input type="number" name="workout-weight" id="workout-weight" />
         </FormGroup>
         <Label>Sets</Label>
           <Input type="select" name="workout-sets" id="workout-sets">
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
             <option>6</option>
             <option>7</option>
             <option>8</option>
           </Input>
           <FormGroup>
            <Label>Reps</Label>
            <Input type="number" name="workout-reps" id="workout-reps" />
          </FormGroup>
          <Button>Create Workout</Button>
        </Form>
      </div>
    );
  }
}

export default WorkoutForm;

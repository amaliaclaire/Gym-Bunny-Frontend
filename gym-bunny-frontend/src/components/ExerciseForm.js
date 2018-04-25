import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h1>Exercise Form</h1>
        <Form>
          <FormGroup>
            <Label>Name of Exercise</Label>
            <Input type="text" name="exercise-name" id="exerciseForm-name"/>
          </FormGroup>
          <FormGroup>
             <Label>Weight</Label>
             <Input type="number" name="exercise-weight" id="exercise-weight" />
          </FormGroup>
            <Label>Sets</Label>
              <Input type="select" name="exercise-sets" id="exercise-sets">
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
              <Input type="number" name="exercise-reps" id="exercise-reps" />
            </FormGroup>
            <Button>Create Exercise</Button>
          </Form>
      </div>
    )
  }
}

export default ExerciseForm;

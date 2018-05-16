import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercise_name: '',
      exercise_weight: 0,
      exercise_sets: 1,
      exercise_reps: 0
    }
  }



  handleNumberFieldChange(fieldName, newValue) {

    const newNumericValue = parseInt(newValue, 10);
    this.setState({ [fieldName]: Number.isNaN(newNumericValue) ? '' : newNumericValue});
  }

  handleSubmit = event => {
    event.preventDefault()

    const request = {
      workout_id: 1,
      exercise_name: this.state.exercise_name,
      exercise_weight: this.state.exercise_weight,
      exercise_sets: this.state.exercise_sets,
      exercise_reps: this.state.exercise_reps
    }

    axios.post('http://localhost:3001/exercises', request)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render () {
    return (
      <div>
        <h1>Exercise Form</h1>
        <Form>
          <FormGroup>
            <Label>Name of Exercise</Label>
            <Input
              type="text"
              name="exercise-name"
              id="exerciseForm-name"
              value={this.state.exercise_name || ''}
              onChange={e => this.setState({exercise_name: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
             <Label>Weight</Label>
             <Input value={this.state.exercise_weight } onChange={e => this.handleNumberFieldChange('exercise_weight', e.target.value)} type="number" name="exercise-weight" id="exercise-weight" />
          </FormGroup>
            <Label>Sets</Label>
              <Input value={this.state.exercise_sets || 1} onChange={e => this.handleNumberFieldChange('exercise_sets', e.target.value)} type="select" name="exercise-sets" id="exercise-sets">
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
              <Input
                value={this.state.exercise_reps }
                onChange={
                  e =>
                    this.handleNumberFieldChange(
                      'exercise_reps', parseInt(e.target.value, 10))
                }
                type="number"
                name="exercise-reps"
                id="exercise-reps"
              />
            </FormGroup>
            <Button onClick={this.handleSubmit} type="submit">Create Exercise</Button>
          </Form>
      </div>
    )
  }
}

export default ExerciseForm;

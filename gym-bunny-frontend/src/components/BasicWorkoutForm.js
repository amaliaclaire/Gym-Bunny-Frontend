import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { PropTypes } from 'prop-types';


class BasicWorkoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workoutName: props.workoutName || ''
    }
  }

  static PropTypes = {
    workoutName: PropTypes.string,
    verb: PropTypes.string.isRequired,
    onAction: PropTypes.func.isRequired
  }

  handleChange = event => {
    this.setState({workoutName: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onAction(this.state.workoutName)
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>{this.props.verb}</Label>
            <Input type="text" onChange={this.handleChange} value={this.state.workoutName}/>
          </FormGroup>
          <Button type="submit">{this.props.verb}</Button>
        </Form>
      </div>
    );
  }
}

export default BasicWorkoutForm;

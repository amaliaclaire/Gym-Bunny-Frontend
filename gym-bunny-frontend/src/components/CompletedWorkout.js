import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import axios from 'axios';
import { Button } from 'reactstrap';


class CompletedWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {workouts: []}
  }

  componentDidMount() {
    axios.get('http://localhost:3001/workouts')
    .then(res => {
      const workouts = res.data
      console.log(workouts);
      this.setState({workouts})
    }).catch(err => console.log(err))
  }



  createWorkoutCard(name, key) {
    return (
      <Card key={key} body outline color="secondary">
      <Button color="link">Edit Workout</Button>
        <CardTitle>{name}</CardTitle>
        <Button outline color="secondary">Enter Workout</Button>{' '}
      </Card>
    )
  }
  render() {
    let elements = this.state.workouts.map((workout, index) => {
      return this.createWorkoutCard(workout.name, index)
    })
    return (
      <div>
        {elements}
      </div>
    );
  }
}

export default CompletedWorkout;

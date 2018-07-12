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
    axios.get(`http://localhost:3001/workouts/`)

    .then(res => {
      const workouts = res.data
      console.log(workouts); // object
      this.setState({workouts})
    }).catch(err => console.log(err))
  }

  handleChange = event => {
    this.setState({id: event.target.value});
  }

  handleDelete = id => {
    axios.delete(`http://localhost:3001/workouts/${id}`)
    .then(res => {
      // 1. this.state.workouts
      // 2. make sure that the res data is deleted
      // 3. then SPLICE new array and make sure it's gone as fuck
      // 4. thissetState new array bitchhhhh
      console.log(res);
      const copyOfNewWorkouts = this.state.workouts
      const foundExercises = copyOfNewWorkouts.find(workout => {
        return workout.id === id
      })
      const newWorkoutIndex = copyOfNewWorkouts.indexOf(copyOfNewWorkouts)
      copyOfNewWorkouts.splice(newWorkoutIndex, 1)
      this.setState({workouts: copyOfNewWorkouts})
    })
  }


  createWorkoutCard(workout) {
    return (
      <Card  key={workout.id} body outline color="secondary">
        <CardTitle>{workout.name}</CardTitle>
        <Button outline color="secondary">Enter Workout</Button>{' '}
        <button onClick={() => this.handleDelete(workout.id)}> Delete</button>
      </Card>
    )
  }
  render() {
    let elements = this.state.workouts.map((workout, index) => {
      return this.createWorkoutCard(workout)
    })
    return (
      <div>
        {elements}
      </div>
    );
  }
}

export default CompletedWorkout;

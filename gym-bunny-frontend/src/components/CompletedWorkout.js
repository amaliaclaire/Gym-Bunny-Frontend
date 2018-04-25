import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import {emojify} from 'react-emojione';
import axios from 'axios';
import { Button, Fade } from 'reactstrap';
//   <CardText>4 sets of 10 reps </CardText>
//  <div id="emoji-black-heart">
//    {emojify(':black_heart:')}
//  </div>

class CompletedWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {workouts: []}
  }

  componentDidMount() {
    axios.get('http://localhost:3001/workouts')
    .then(res => {
      const workouts = res.data
      // console.log(workouts);
      this.setState({workouts})
    }).catch(err => console.log(err))
  }


  createWorkoutCard(name, key) {
    return (
      <Card key={key} body outline color="secondary">
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

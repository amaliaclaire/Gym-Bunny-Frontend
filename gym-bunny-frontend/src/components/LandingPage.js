import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button} from 'reactstrap';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onClickPlan: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <Card inverse>
          <CardImg width="100%" src="https://i.pinimg.com/564x/1d/bb/75/1dbb75d6619ddfa9ea039cde8e7f9463.jpg" alt="Card image cap" />
          <CardImgOverlay>
            <CardTitle>Plan A Work Out</CardTitle>
            <CardText>Design a workout to maximize your gym bunny potential.</CardText>
            <Button><Link to='/workoutForm'>Enter</Link></Button>

            {/*
            <Button onClick={this.props.onClickPlan} color="secondary">Enter</Button>{' '}*/}
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <CardImg width="100%" src="https://i.pinimg.com/564x/33/f3/1a/33f31af9fbcf1c4554df0268f675a93a.jpg" alt="Card image cap" />
          <CardImgOverlay>
            <CardTitle>Workout</CardTitle>
            <CardText>Start to sweat with your gym bunny workout</CardText>
            <Button><Link to='/workout'>Enter</Link></Button>

          </CardImgOverlay>
        </Card>

      </div>
    );
  };
}


export default ImageCard;

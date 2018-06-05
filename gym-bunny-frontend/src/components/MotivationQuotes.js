import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';


function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}


class MotivationQuotes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {quotes: [], index: -1}
  }

  handleClick = () => {
    let index;
    do {
      index = getRandomInt(this.state.quotes.length)
    } while (index === this.state.index && this.state.quotes.length > 1)  
    this.setState({index})}

  componentDidMount() {
    axios.get('http://localhost:3001/motivationQuotes')
    .then(response => {
      const quotes = JSON.parse(response.request.response)
      const quoteDescriptions = quotes.map(quote => quote.description)
      const index = getRandomInt(quoteDescriptions.length)
      this.setState({quotes: quoteDescriptions, index})
      }).catch(err => console.log(err))
  }



  render () {
    const quote = this.state.index > -1 ? <h3>{this.state.quotes[this.state.index]}</h3> : null

    return (
      <div>
        <h5>motivational quotes</h5>
        {quote}
        <Button outline color="secondary" onClick={this.handleClick}>Next Quote</Button>{' '}

      </div>
    )
  }
}



export default MotivationQuotes

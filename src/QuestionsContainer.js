import React, { Component } from 'react'
import Questions1 from './Questions1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import { Route, Link } from 'react-router-dom'
import { Form, Checkbox, Modal, Image, Button } from 'semantic-ui-react'

class QuestionsContainer extends Component {

  render() {
    return (
      <div >
        <Questions1 />
        <Question2 />
        <Question3 />
        <Question4 />
        <Link to='/your-costume'> <Button id="button" inverted color='black' size='huge' centered>Find your costume!</Button></Link>
      </div>
    )
  }
}
export default QuestionsContainer

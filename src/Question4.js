import React, { Component } from 'react'
import { Form, Checkbox, Modal, Image } from 'semantic-ui-react'

class Question4 extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })


  render() {
    return (
      <div className="ui three column grid">
        <div className="column centered">
          <div className="ui segment ">
            <Form>
              <Form.Field>
                Is there always money in the banana stand?
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='what kind of question is this?'
                  name='4'
                  value='what kind of question is this?'
                  checked={this.state.value === 'what kind of question is this?'}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
export default Question4

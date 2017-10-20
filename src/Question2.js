import React, { Component } from 'react'
import { Form, Checkbox, Modal, Image } from 'semantic-ui-react'

class Question2 extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })


  render() {
    return (
      <div className="ui three column grid">
        <div className="column centered">
          <div className="ui segment ">
              <Form>
                <Form.Field>
                  Are you a human bean?
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='maybe'
                    name='2'
                    value='maybe'
                    checked={this.state.value === 'maybe'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='definitely not'
                    name='2'
                    value='definitely not'
                    checked={this.state.value === 'definitely not'}
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
export default Question2

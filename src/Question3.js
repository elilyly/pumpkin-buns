import React, { Component } from 'react'
import { Form, Checkbox, Modal, Image } from 'semantic-ui-react'

class Question3 extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })


  render() {
    return (
      <div className="ui three column grid">
        <div className="column centered">
          <div className="ui segment ">
            <Form>
              <Form.Field>
                Choose a favorite genre of movie?
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='horror'
                  name='3'
                  value='horror'
                  checked={this.state.value === 'horror'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='comedy'
                  name='3'
                  value='comedy'
                  checked={this.state.value === 'comedy'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='animated'
                  name='3'
                  value='animated'
                  checked={this.state.value === 'animated'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='action'
                  name='3'
                  value='action'
                  checked={this.state.value === 'action'}
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
export default Question3

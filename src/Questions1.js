import React, { Component } from 'react'
import { Form, Checkbox, Modal, Image } from 'semantic-ui-react'

class Questions1 extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })


  render() {
    return (
      <div className="ui three column grid">
        <div className="column centered">
          <div className="ui segment ">
            <Form>
              <Form.Field>
                Are you easily scared?
              </Form.Field>
              <Form.Field>
                <Modal trigger={<Checkbox
                  radio
                  label='yes'
                  name='1'
                  value='yes'
                  checked={this.state.value === 'yes'}
                  onChange={this.handleChange}
                />}  basic size='small'>
                  <Modal.Content image>
                    <Image src='http://boredomtherapy.com/wp-content/uploads/2015/10/03-funny-pumpkin-carvings.jpg' />
                  </Modal.Content>
                </Modal>
              </Form.Field>
              <Form.Field>
                <Modal trigger={<Checkbox
                  radio
                  label='nothing scares me'
                  name='1'
                  value='nothing scares me'
                  checked={this.state.value === 'nothing scares me'}
                  onChange={this.handleChange}
                />}  basic size='small'>
                <Modal.Content image>
                  <Image src='https://vignette1.wikia.nocookie.net/spongebob/images/2/23/Nosferatu.jpg/revision/latest?cb=20121008090331' />
                </Modal.Content>
              </Modal>
            </Form.Field>
          </Form>
        </div>

        </div>
      </div>
    )
  }
}
export default Questions1

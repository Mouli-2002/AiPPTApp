import React, {Component} from 'react'
import './index.css'

class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.state = {prompt: ''}
  }

  handleChange = e => {
    this.setState({prompt: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.prompt.trim()) return
    this.props.onSend(this.state.prompt)
    this.setState({prompt: ''})
  }

  render() {
    return (
      <div className="chatbox">
        <div className="chatbox-header">
          <h2>Hello, piyundia4!</h2>
          <p>What do you want me to generate today?</p>
        </div>
        <form onSubmit={this.handleSubmit} className="chatbox-form">
          <div className="chatbox-input-wrapper">
            <input
              type="text"
              value={this.state.prompt}
              onChange={this.handleChange}
              placeholder="Start with a topic, we’ll turn it into slides!"
              className="chatbox-input"
            />
            <span className="chatbox-icon mic">🎙️</span>
            <button type="submit" className="chatbox-icon send">
              📤
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default ChatBox

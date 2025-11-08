import React, {Component} from 'react'
import ChatBox from './Components/ChatBox'
import PPTPreview from './Components/PPTPreview'
import {callGeminiAPI} from './Components/GeminiApi'
import {formatSlides} from './Components/formatSlides'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: null, // will hold parsed slide data
      loading: false, // show loading state
      error: null, // capture errors
    }
  }

  handleSend = async query => {
    this.setState({loading: true, error: null})

    try {
      const content = await callGeminiAPI(query)
      const parsedSlides = formatSlides(content)
      this.setState({slides: parsedSlides, loading: false})
    } catch (err) {
      console.error('Error fetching slides:', err)
      this.setState({
        error: 'Something went wrong while fetching slides.',
        loading: false,
      })
    }
  }

  render() {
    const {slides, loading, error} = this.state

    return (
      <div className="app">
        <ChatBox onSend={this.handleSend} />

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {slides && <PPTPreview slides={slides} />}
      </div>
    )
  }
}

export default App

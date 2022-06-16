import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeBgColor = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const bgColor = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="dark-light-container">
        <div className={`card-container ${bgColor}`}>
          <h1 className="heading ">click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeBgColor}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

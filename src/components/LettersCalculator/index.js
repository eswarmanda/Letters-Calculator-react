import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onClickChange = event => {
    console.log(event.target.value.length)
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-cont">
        <div className="card">
          <div className="obj-card">
            <h1 className="title">Calculate the Letters you enter</h1>
            <div className="input-card">
              <form>
                <label className="p">
                  Enter the phrase
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter the phrase"
                    onChange={this.onClickChange}
                  />
                </label>
              </form>
            </div>
            <div className="status-card">
              <p className="p1">No.of letters: {count}</p>
            </div>
          </div>
          <img
            className="img-card"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

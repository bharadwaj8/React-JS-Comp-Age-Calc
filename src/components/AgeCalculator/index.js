// Write your code here.
import './index.css'
import {Component} from 'react'

class AgeCalculator extends Component {
  state = {year: 0, error: 0, count: 0}

  getInput = e => {
    this.setState({year: e.target.value})
  }

  validateInput = () => {
    const {year} = this.state
    let check = 0
    let error = 0
    const l = year.length
    if (l <= 4 && year < '2021') {
      check = 2021 - year
    } else {
      error = 1
    }
    this.setState({error, count: check})
  }

  render() {
    const {error, count} = this.state

    const active = count > 1 ? 's' : ''

    console.log(error)
    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">Age Calculator</h1>
          <div>
            <input
              type="text"
              className="input"
              placeholder="Enter the year that you are Born"
              onChange={this.getInput}
            />
            {error ? (
              <p className="invalid">Enter the year that you are Born</p>
            ) : (
              ''
            )}
          </div>
          {count ? (
            <p className="valid">
              You are {count} year{active} old by the end of 2021
            </p>
          ) : (
            ''
          )}
          <button className="button" type="button" onClick={this.validateInput}>
            Calculate
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
          className="image"
          alt="imag"
        />
      </div>
    )
  }
}

export default AgeCalculator

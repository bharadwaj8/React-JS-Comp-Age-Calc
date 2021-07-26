import './index.css'
import {Component} from 'react'

class AgeCalculator extends Component {
  state = {year: 0}

  getInput = e => {
    console.log(e.target.value)
    this.setState({year: e.target.value})
  }

  render() {
    const {year} = this.state

    let check = 0
    const validateInput = () => {
      // console.log(typeof year)
      console.log(typeof parseInt(year, 10))
      if (year < 2021) {
        check = year - 2021
      }
    }

    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">Age Calculator</h1>
          <input type="text" className="input" onChange={this.getInput} />
          <button className="button" type="button" onClick={validateInput}>
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

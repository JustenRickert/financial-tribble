import React, {Component} from "react"
import PropTypes from "prop-types"
import RateInputForm from "./RateInputForm"

export default class Header extends Component {
  static propTypes = {
    addRate: PropTypes.func.isRequired
  }

  handleSave = (text, amount, recurrence) => {
    if (text.length !== 0) this.props.addRate(text, amount, recurrence)
  }

  render() {
    return (
      <header className="header">
        <h1>rates</h1>
        <RateInputForm onSave={this.handleSave} />
      </header>
    )
  }
}

import React, {Component} from "react"
import PropTypes from "prop-types"

import RateInputForm from "./RateInputForm"

export default class Header extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  handleSave(text, amount, recurrence) {
    if (text.length !== 0) this.props.actions.addRate(text, amount, recurrence)
  }

  render() {
    return (
      <header className="header">
        <h1>Personal Finance Tool</h1>
        <p>
          Hello! Input the amount of the recurring payments you make and the
          regularlity by which you make those payments, save it, then look at
          what you can expect your bank balance to be in the graph below.
        </p>
        <RateInputForm
          onSave={(text, amount, recurrence) =>
            this.handleSave(text, amount, recurrence)}
        />
      </header>
    )
  }
}

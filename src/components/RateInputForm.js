import React, {Component} from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

export default class RateInputForm extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    amount: PropTypes.number,
    editing: PropTypes.bool
  }

  state = {
    text: this.props.text || "",
    amount: this.props.amount || 0,
    recurrence: this.props.recurrence || 1
  }

  handleSubmit = e => {
    if (e.which === 13) {
      e.preventDefault()
      this.setState({text: "", amount: 0, recurrence: 0})
      this.props.onSave(
        this.state.text,
        this.state.amount,
        this.state.recurrence
      )
    }
  }

  handleTextChange = e => {
    this.setState({text: e.target.value})
  }

  handleAmountChange = e => {
    this.setState({amount: e.target.value})
  }

  handleRecurrenceChange = e => {
    this.setState({recurrence: e.target.value})
  }

  render() {
    return (
      <header className="header">
        <form onSubmit={this.handleSubmit} onKeyDown={this.handleSubmit}>
          <fieldset>
            <label>Description</label>
            <input
              className={classnames({edit: this.props.editing})}
              name="text"
              type="text"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
            <br />
            <label>Amount</label>
            <input
              name="amount"
              type="number"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
            <br />
            <label>Recurrence (in days)</label>
            <input
              name="recurrence"
              type="number"
              value={this.state.recurrence}
              onChange={this.handleRecurrenceChange}
            />
          </fieldset>
        </form>
      </header>
    )
  }
}

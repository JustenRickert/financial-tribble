import React, {Component} from "react"
import PropTypes from "prop-types"
import DatePicker from "react-datepicker"
import moment from "moment"

import "react-datepicker/dist/react-datepicker.css"

export default class TransactionItemForm extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired
  }

  state = {
    editing: false,
    name: "",
    amount: 0,
    date: moment()
  }

  handleSaveButton = e => {
    e.preventDefault()
    this.props.onSave(this.state.name, this.state.amount, this.state.date)
    this.setState({name: "", amount: 0, date: moment()})
  }

  handleSubmit = e => {
    if (e.which === 13) {
      e.preventDefault()
      this.setState({text: "", amount: 0, recurrence: moment()})
      this.props.onSave(this.state.name, this.state.amount, this.state.date)
    }
  }

  handleNameChange = e => this.setState({name: e.target.value})
  handleAmountChange = e => this.setState({amount: e.target.value})
  handleDateChange = date => this.setState({date})

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit} onKeyDown={this.handleSubmit}>
          <fieldset>
            <label>Account name</label>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
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
            <label>Date</label>
            <DatePicker
              selected={this.state.date}
              onChange={this.handleDateChange}
            />
            <br />
            <button onClick={this.handleSaveButton}>save</button>
          </fieldset>
        </form>
      </header>
    )
  }
}

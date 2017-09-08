import React, {Component} from "react"
import PropTypes from "prop-types"
import DatePicker from "react-datepicker"
import moment from "moment"

import "react-datepicker/dist/react-datepicker.css"

moment.locale("us", {longDateFormat: {L: "DD/MM/YYYY"}})

export default class TransactionItemForm extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  state = {
    editing: false,
    name: "",
    amount: 0,
    date: moment()
  }

  handleSaveButton = () => {
    this.props.actions.addTransaction(
      this.state.name,
      this.state.date,
      this.state.amount
    )
    this.setState({name: "", amount: 0, date: moment()})
  }

  handleSubmit = e => {
    if (e.which === 13) {
      e.preventDefault()
      this.handleSaveButton()
    }
  }

  handleNameChange = e => this.setState({name: e.target.value})
  handleAmountChange = e => this.setState({amount: e.target.value})
  handleDateChange = date => this.setState({date})

  render() {
    return (
      <header
        style={{
          backgroundColor: "#eee",
          color: "#000",
          borderRadius: 5,
          padding: 20
        }}
        onKeyDown={this.handleSubmit}
      >
        <label>Account</label>
        <br />
        <input
          style={{border: "none"}}
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br />
        <label>Amount</label>
        <br />
        <input
          style={{border: "none"}}
          name="amount"
          type="number"
          value={this.state.amount}
          onChange={this.handleAmountChange}
        />
        <br />
        <label>Date</label>
        <br />
        <DatePicker
          selected={this.state.date}
          onChange={this.handleDateChange}
        />
        <br />
        <button onClick={this.handleSaveButton}>save</button>
      </header>
    )
  }
}

import React, {Component} from "react"
import PropTypes from "prop-types"
// import classnames from "classnames"
import DatePicker from "react-datepicker"
import moment from "moment"

import "react-datepicker/dist/react-datepicker.css"

moment.updateLocale("us", {longDateFormat: {L: "DD/MM/YYYY"}})

const inputStyle = {border: "none"}

export default class TransactionItemBox extends Component {
  static propTypes = {
    account: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,

    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    amount: PropTypes.number.isRequired
  }

  state = {
    name: this.props.name,
    amount: this.props.amount,
    date: moment(this.props.date),
    editing: false
  }

  handleDoubleClick = () => {
    if (!this.state.editing) this.setState({editing: true})
  }

  handleSave = () => {
    this.props.actions.addTransaction(
      this.state.name,
      this.state.date,
      this.state.amount
    )
    this.props.actions.deleteTransaction(this.props.name, this.props.id)
  }

  handleDelete = () =>
    this.props.actions.deleteTransaction(this.props.name, this.props.id)

  handleSubmit = e => {
    if (e.which === 13) {
      e.preventDefault()
      this.handleSave()
    }
  }

  handleNameChange = e => this.setState({name: e.target.value})
  handleAmountChange = e => this.setState({amount: e.target.value})
  handleDateChange = date => this.setState({date})

  render() {
    let element
    if (this.state.editing) {
      element = (
        <div className="transaction-item" onKeyDown={this.handleSubmit}>
          <span>Account</span>
          <br />
          <input
            style={inputStyle}
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />
          <span>Amount</span>
          <br />
          <input
            style={inputStyle}
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
          <button onClick={this.handleSave}>save</button>
          <button onClick={this.handleDelete}>delete</button>
        </div>
      )
    } else {
      element = (
        <p onDoubleClick={this.handleDoubleClick}>
          {moment(this.state.date).format("DD/MM/YYYY") +
            ", $" +
            this.state.amount}
        </p>
      )
    }

    return (
      <div
        style={{
          backgroundColor: "#eee",
          color: "#000",
          borderRadius: 5,
          padding: 20
        }}
      >
        {element}
      </div>
    )
  }
}

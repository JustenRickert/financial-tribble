import React, {Component} from "react"
import PropTypes from "prop-types"

import TransactionItemForm from "./TransactionItemForm"

export default class TransactionForm extends Component {
  handleSaveTransaction(name, amount, date) {
    console.log(name, amount, date)
  }

  render() {
    return <TransactionItemForm onSave={this.handleSaveTransaction} />
  }
}

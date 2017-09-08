import React, {Component} from "react"
import PropTypes from "prop-types"

import TransactionItemForm from "./TransactionItemForm"

export default class TransactionForm extends Component {
  static propTypes = {
    account: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  handleSaveTransaction(name, date, amount) {
    if (name.length !== 0) this.props.actions.addTransaction(name, date, amount)
  }

  render() {
    return (
      <TransactionItemForm onSave={this.handleSaveTransaction.bind(this)} />
    )
  }
}

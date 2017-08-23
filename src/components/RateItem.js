import React, {Component} from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import RateInputForm from "./RateInputForm"

export default class RateItem extends Component {
  static propTypes = {
    rate: PropTypes.object.isRequired,
    editRate: PropTypes.func.isRequired,
    deleteRate: PropTypes.func.isRequired
  }

  state = {editing: false}

  handleDoubleClick = () => {
    this.setState({editing: true})
  }

  handleSave = (id, text, amount, recurrence) => {
    if (text.length === 0) {
      //delete this entry
    } else {
      this.props.editRate(id, text, amount, recurrence)
    }
    this.setState({editing: false})
  }

  render() {
    const {rate} = this.props

    let element
    if (this.state.editing) {
      element = (
        <RateInputForm
          text={rate.text}
          amount={Number(rate.amount)}
          editing={this.state.editing}
          onSave={(text, amount, recurrence) =>
            this.handleSave(rate.id, text, amount, recurrence)}
        />
      )
    } else {
      element = (
        <div className="view">
          <label onDoubleClick={this.handleDoubleClick}>
            Description: {rate.text}<br /> Amount: {rate.amount}<br />{" "}
            Recurrence: {rate.recurrence}
          </label>
          <br />
          <button
            className="destroy"
            onClick={() => this.props.deleteRate(rate.id)}
          >
            delete
          </button>
        </div>
      )
    }

    return (
      <li className={classnames({editing: this.state.editing})}>
        {element}
      </li>
    )
  }
}

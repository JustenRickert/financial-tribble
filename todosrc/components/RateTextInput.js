import React, {Component} from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

export default class RateTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    amount: PropTypes.number,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newRate: PropTypes.bool
  }

  state = {
    text: this.props.text || "",
    amount: this.props.amount || 0
  }

  handleSubmit = e => {
    console.log(e)
  }

  render() {
    return (
      <form
        className={classnames({
          "new-rate": this.props.newRate
        })}
      >
        <input
          className={classnames({
            edit: this.props.editing,
            "new-rate": this.props.newRate
          })}
        />

        <input
          className={classnames({
            edit: this.props.editing,
            "new-rate": this.props.newRate
          })}
        />

      </form>
    )
  }
}

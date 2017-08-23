import React, {Component} from "react"
import PropTypes from "prop-types"

import RateItem from "./RateItem"

export default class RateSection extends Component {
  static PropTypes = {
    rates: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const {rates, actions} = this.props

    return (
      <section>
        <ul className="rate-list">
          {rates.map((rate, id) =>
            <RateItem key={id} rate={rate} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}

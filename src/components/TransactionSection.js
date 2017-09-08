import React, {Component} from "react"
import Grid from "react-css-grid"
import PropTypes from "prop-types"
import moment from "moment"

// import RateItem from "./RateItem"
import TransactionItemBox from "./TransactionItemBox"

export default class TransactionSection extends Component {
  static PropTypes = {
    account: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const {account, actions} = this.props

    return (
      <section>
        <ul className="transaction-list">
          {account.map(acc => (
            <div key={acc.name}>
              <h3>{acc.name + " account"}</h3>
              <span>Itemization List:</span>
              <Grid width={200} gap={5}>
                {acc.transactions
                  .sort(
                    (left, right) =>
                      moment(left.date).format("X") -
                      moment(right.date).format("X")
                  )
                  .map(tran => (
                    <TransactionItemBox
                      key={tran.id}
                      account={account}
                      actions={actions}
                      id={tran.id}
                      name={acc.name}
                      amount={tran.amount}
                      date={tran.date}
                    />
                  ))}
              </Grid>
            </div>
          ))}
        </ul>
      </section>
    )
  }
}

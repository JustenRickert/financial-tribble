import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Route, Link} from "react-router-dom"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import classnames from "classnames"

import * as Actions from "../actions"
import Header from "../components/Header"
import RateSection from "../components/RateSection"
import MyGraph from "../components/MyGraph"
import TransactionItemForm from "../components/TransactionItemForm"
import TransactionSection from "../components/TransactionSection"

/* MAIN */

const App = ({account, range, rates, actions}) => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/transactionform">Transaction Form</Link>
          <br />
          <Link to="/recurrenceform">Recurrence Form</Link>
          <Route
            path="/recurrenceform"
            render={() => (
              <div>
                <Header actions={actions} />
                <RateSection rates={rates} actions={actions} />
                <MyGraph rates={rates} actions={actions} />
              </div>
            )}
          />
          <Route
            path="/transactionform"
            render={() => (
              <div>
                <TransactionItemForm actions={actions} />
                <TransactionSection account={account} actions={actions} />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  )
}

App.propTypes = {
  account: PropTypes.array.isRequired,
  rates: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  account: state.account,
  rates: state.rates
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

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
import TransactionForm from "../components/TransactionForm"

/* MAIN */

const App = ({account, range, rates, actions}) => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/old">Old</Link>
          <Route
            path="/old"
            render={() => (
              <div>
                <Header actions={actions} />
                <RateSection rates={rates} actions={actions} />
                <MyGraph rates={rates} actions={actions} />
              </div>
            )}
          />
          <Route
            path="/"
            render={() => (
              <div>
                <TransactionForm account={account} actions={actions} />
              </div>
            )}
          />
          {/* <Header addRate={actions.addRate} /> */}
        </div>
      </BrowserRouter>
    </div>
  )
}

App.propTypes = {
  account: PropTypes.array.isRequired,
  rates: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  /* range: PropTypes.object.isRequired*/
}

const mapStateToProps = state => ({
  account: state.account,
  rates: state.rates
  /* range: state.range*/
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

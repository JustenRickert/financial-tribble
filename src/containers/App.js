import React from "react"
import PropTypes from "prop-types"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import classnames from "classnames"

import * as RateActions from "../actions"
import Header from "../components/Header"
import RateSection from "../components/RateSection"
import MyGraph from "../components/MyGraph"
import Graph from "../components/Graph"

/* MAIN */

const App = ({rates, actions}) =>
  <div>
    <Header addRate={actions.addRate} />
    <RateSection rates={rates} actions={actions} />
    <MyGraph rates={rates} />
  </div>

App.propTypes = {
  rates: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  rates: state.rates
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(RateActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

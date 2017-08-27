import React from "react"
import PropTypes from "prop-types"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import classnames from "classnames"

import * as Actions from "../actions"
import Header from "../components/Header"
import RateSection from "../components/RateSection"
import MyGraph from "../components/MyGraph"

/* MAIN */

const App = ({range, rates, actions}) =>
  <div>
    <Header addRate={actions.addRate} />
    <RateSection rates={rates} actions={actions} />
    <MyGraph range={range} rates={rates} actions={actions}/>
  </div>

App.propTypes = {
  rates: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  range: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  rates: state.rates,
  range: state.range
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

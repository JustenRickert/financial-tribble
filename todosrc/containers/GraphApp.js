import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Grapher from '../components/Grapher'

const GraphApp = ({rates, rateActions}) =>
    <div>
      <Grapher addRate={actions.addRate}/>
    </div>

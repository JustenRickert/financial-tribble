import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Grapher extends Component {
  static propTypes = {
    addRate: PropTypes.func.isRequired
  }

  handleSave = (text, amount ) => {
    if(amount.length !== 0) this.props.addRate(text, amount)
  }

  render(){
    return (
        <header className='header'>
        <h1>rates</h1>
        <RateTextInput />
        </header>)
  }
}

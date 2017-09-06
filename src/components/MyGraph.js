import React, {Component} from "react"
import PropTypes from "prop-types"
import moment from "moment"
import {
  ComposedChart,
  LineChart,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Line,
  Brush,
  AreaChart,
  Area
} from "recharts"
// import {step, linear, polynomial} from "everpolate"

export default class MyGraph extends Component {
  static propTypes = {
    rates: PropTypes.array.isRequired
  }

  /** Returns data which states what each day adds to the bank balance */
  ratesToData() {
    let rates = this.props.rates
    let data = []
    // initialization
    for (let i = 0; i < 365; i++)
      data.push({
        date: moment().add({days: i}),
        amount: 0
      })
    // set amount
    for (let rate of rates) {
      for (let i = 0; i < 365; i += rate.recurrence) {
        data[i].amount += rate.amount
      }
    }
    return data
  }

  //TODO I have no idea how to be able to get this up to the redux state level

  render() {
    let data = this.ratesToData()

    let currentBalance = 0
    let graphData = []
    for (let i = 0; i < 365; i++) {
      if (data[i].amount !== 0) currentBalance += data[i].amount
      graphData.push({
        date: moment()
          .add({days: i})
          .format("MM-DD"),
        payment: data[i].amount,
        amount: currentBalance
      })
    }

    console.log(this.props.range)

    return (
      <div className="line-chart-wrapper">
        <ComposedChart
          width={600}
          height={400}
          data={graphData}
          margin={{top: 40, right: 40, bottom: 20, left: 20}}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" label="Date" />
          <YAxis domain={["auto", "auto"]} label="Bank Balance" />
          <Tooltip />
          <Bar dataKey="payment" barSize={20} fill="#413ea0" />
          <Line dataKey="amount" stroke="#ff7300" dot={false} />
          <Brush dataKey="date" startIndex={0} endIndex={40}>
            <AreaChart>
              <CartesianGrid />
              <YAxis hide domain={["auto", "auto"]} />
              <Area
                dataKey="amount"
                stroke="#ff7300"
                fill="#ff7300"
                dot={false}
              />
            </AreaChart>
          </Brush>
        </ComposedChart>
      </div>
    )
  }
}

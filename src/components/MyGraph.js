import React, {Component} from "react"
import PropTypes from "prop-types"
import moment from "moment"
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Brush,
  AreaChart,
  Area
} from "recharts"

export default class MyGraph extends Component {
  static propTypes = {
    rate: PropTypes.object.isRequired
  }

  render() {
    let data = []
    for (let i = 0; i < 100; i++) {
      data.push({date: undefined, money: undefined})
    }
    data = data.map((d, i) => {
      return {
        date: moment().add({days: i}).format("MM-DD"),
        money: 50 * Math.sin(i)
      }
    })

    return (
      <div className="line-chart-wrapper">
        <LineChart
          width={600}
          height={400}
          data={data}
          margin={{top: 40, right: 40, bottom: 20, left: 20}}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" label="Date" />
          <YAxis domain={["auto", "auto"]} label="Stock Price" />
          <Tooltip />
          <Line dataKey="money" stroke="#ff7300" dot={false} />
          <Brush dataKey="date" startIndex={data.length - 40}>
            <AreaChart>
              <CartesianGrid />
              <YAxis hide domain={["auto", "auto"]} />
              <Area
                dataKey="money"
                stroke="#ff7300"
                fill="#ff7300"
                dot={false}
              />
            </AreaChart>
          </Brush>
        </LineChart>
      </div>
    )
  }
}

import moment from "moment"

import account from "./account"

describe("account reducer", () => {
  it("should handle initial state", () => {
    const acc = account(undefined, {})
    const assetsId = acc
      .find(a => a.name === "assets")
      .transactions.map(t => t.id)
    const expensesId = acc
      .find(a => a.name === "expenses")
      .transactions.map(t => t.id)
    expect(acc).toEqual([
      {
        name: "assets",
        transactions: [
          {id: assetsId[0], date: moment(), amount: 12},
          {id: assetsId[1], date: moment(), amount: 13}
        ]
      },
      {
        name: "expenses",
        transactions: [{id: expensesId[0], date: moment(), amount: 20}]
      }
    ])
  })

  it("should handle 'ADD_TRANSACTION'", () => {
    const acc = account(undefined, {
      type: "ADD_TRANSACTION",
      name: "assets",
      date: moment(),
      amount: 14
    })
    const assetsId = acc
      .find(a => a.name === "assets")
      .transactions.map(t => t.id)
    const expensesId = acc
      .find(a => a.name === "expenses")
      .transactions.map(t => t.id)

    expect(acc).toEqual([
      {
        name: "assets",
        transactions: [
          {id: assetsId[0], date: moment(), amount: 12},
          {id: assetsId[1], date: moment(), amount: 13},
          {id: assetsId[2], date: moment(), amount: 14}
        ]
      },
      {
        name: "expenses",
        transactions: [{id: expensesId[0], date: moment(), amount: 20}]
      }
    ])
  })

  it("should handle 'DELETE_TRANSACTION'", () => {
    const initAcc = account(undefined, {}),
      assetsId = initAcc
        .find(a => a.name === "assets")
        .transactions.map(t => t.id),
      expensesId = initAcc
        .find(a => a.name === "expenses")
        .transactions.map(t => t.id),
      idToDelete = initAcc.find(a => a.name === "assets").transactions[0].id

    const deleteAcc = account(undefined, {
      type: "DELETE_TRANSACTION",
      name: "assets",
      id: idToDelete
    })

    expect(deleteAcc).toEqual([
      {
        name: "assets",
        transactions: [
          {id: assetsId[1], date: moment(), amount: 13},
          {id: assetsId[2], date: moment(), amount: 14}
        ]
      },
      {
        name: "expenses",
        transactions: [{id: expensesId[0], date: moment(), amount: 20}]
      }
    ])
  })
})

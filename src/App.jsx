import { useState, useReducer } from 'react'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 })
  const [amount, setAmount] = useState(0)

  function reducer(state, action) {
    if (action.type == "add") {
      return {
        ...state,
        balance: state.balance + action.payload
      }
    }

    if (action.type == "sub") {
      return {
        ...state,
        balance: state.balance - action.payload
      }
    }
  }

  return (
    <>
      <div className="container">

        <div className="balance">
          {state.balance}
        </div>

        <input
          className="amount-input"
          type="text"
          onChange={(e) => { setAmount(e.target.value) }}
          value={amount}
          name=""
          id=""
          placeholder="Enter amount"
        />

        <div className="buttons">

          <button
            className="deposit"
            onClick={() => {
              dispatch({
                type: "add",
                payload: Number(amount)
              })
            }}
          >
            Deposit
          </button>

          <button
            className="withdraw"
            onClick={() => {
              dispatch({
                type: "sub",
                payload: Number(amount)
              })
            }}
          >
            Withdraw
          </button>

        </div>

      </div>
    </>
  )
}

export default App


import React from 'react'

const Exchange = () => {
  return (
    <div>
      <div>
        <h1>Exchange Coins</h1>
      </div>
      <div>
        <div>
          <h1>Sell</h1>
          <select>
            <option>Inr</option>
            <option>Eur</option>
            <option>Btc</option>
          </select>
          <input/>
        </div>
        <div>
          <h1>Buy</h1>
          <select>
            <option>Inr</option>
            <option>Eur</option>
            <option>Btc</option>
          </select>
          <h2>2300</h2>
        </div>
      <button>Exchange</button>
      </div>
    </div>
  )
}

export default Exchange
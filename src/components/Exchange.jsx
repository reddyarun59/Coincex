import React from 'react'

const Exchange = () => {
  return (
    <div className="bg-white my-6 p-6 rounded-md">
      <div>
        <h1 className="text-xl font-bold">Exchange Coins</h1>
      </div>
      <div className="flex flex-col place-items-stretch">
        <div className="flex justify-around">
          <h1>Sell</h1>
          <select>
            <option>Inr</option>
            <option>Eur</option>
            <option>Btc</option>
          </select>
          <input/>
        </div>
        <div className="flex justify-around">
          <h1>Buy</h1>
          <select>
            <option>Inr</option>
            <option>Eur</option>
            <option>Btc</option>
          </select>
          <h2>2300</h2>
        </div>
        <div>
          <button>Exchange</button>
        </div>
      </div>
    </div>
  )
}

export default Exchange
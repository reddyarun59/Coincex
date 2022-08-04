import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

const Coins = () => {
  const { coins, isLoading, isError, isSuccess, message }= useSelector((state)=>state.coins)
  return (
    <div className="bg-white">
      <div className="py-4 px-4">
        <h2 className="text-xl font-bold">Cryptocurrency by market cap</h2>
      </div>
      <div className="overflow-y-auto h-screen no-scrollbar">

        {coins.map((coin)=>(
          <div key={coin.id} className="flex py-4 border-b-4 justify-between px-4">
            <div>
              <div className="flex"> 
                <img src={coin.image} className="h-8 w-8 rounded-full"/>
                <h3 className="text-xl font-medium">{coin.name}</h3>
              </div>
              <h4 className="text-base font-light">Mkt Cap{coin.market_cap}</h4>
            </div>
        <h5 className="text-lg">{coin.price_change_percentage_24h}</h5>
        </div>
        ))}
      </div>

    </div>
  )
}

export default Coins
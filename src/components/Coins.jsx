import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

const Coins = () => {
  const { coins, isLoading, isError, isSuccess, message }= useSelector((state)=>state.coins)
  return (
    <div>
      
      {coins.map((coin)=>(
        <div key={coin.id}>
      <div>{coin.symbol}</div>
      <div>{coin.current_price}</div>
      <div>{coin.price_change_percentage_24h}</div>
      </div>
      ))}

    </div>
  )
}

export default Coins
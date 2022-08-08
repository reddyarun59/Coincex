import React, { useEffect, useState } from 'react'
import up from "../upp.png"
import down from "../up.png"

import { useDispatch, useSelector } from 'react-redux';

const Coins = () => {
  const { coins, isLoading, isError, isSuccess, message }= useSelector((state)=>state.coins)

  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setLoading(prevState=>!prevState)
  }, [coins, isLoading])
  

  
  return (
    <div className="bg-white px-4 py-4 rounded-md">
      <div className="py-4 px-4">
        <h2 className="text-xl font-bold">Cryptocurrency by market cap</h2>
      </div>
      {loading?<h1>Loading</h1>:(
        <div className="overflow-y-auto max-h-screen no-scrollbar">
        {coins?.map((coin)=>(
          <div key={coin.id} className="flex py-4 border-b-2 border-slate-200 justify-between px-4">
            <div>
              <div className="flex"> 
                <img src={coin.image} className="h-8 w-8 rounded-full mx-2"/>
                <h3 className="text-xl font-medium">{coin.name}</h3>
              </div>
              <h4 className="text-base font-light">Mkt Cap {coin.market_cap}</h4>
            </div>
        <h5 className="text-lg"><div className="flex">
          {coin.price_change_percentage_24h>0?<img src={up} className="w-6"/>:<img src={down} className="w-6"/>}
          {Math.abs(coin.price_change_percentage_24h)}%
          </div>
          </h5>
        </div>
        ))}
      </div>

      )}
      
    </div>
  )
}

export default Coins
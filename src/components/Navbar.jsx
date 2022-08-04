import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins, reset } from '../features/coins/coinSlice';

const Navbar = () => {

  
  // const { currency, symbol } = CoinsState();

  const [currency, setCurrency]=useState("usd")
  const handleChange = (e) => {
    setCurrency(e.target.value)
  }

  
  const dispatch=useDispatch()
  const { coins, isLoading, isError, isSuccess, message }= useSelector((state)=>state.coins)

  useEffect(() => {
    dispatch(fetchCoins(currency));
    console.log(coins)

    //dispatch(reset())
    return ()=>{
      dispatch(reset())
    }
  }, [ dispatch, currency]);


  return (
    <div>
        <div className="flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            onChange={handleChange}
            value={currency}
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select>
        </div>
        <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input />
        </div>
    </div>
  )
}

export default Navbar
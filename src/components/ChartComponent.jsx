import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoinTime, reset } from '../features/charts/chartSlice'

const ChartComponent = () => {

  const dispatch=useDispatch()
  const { coins, isLoading, isError, isSuccess, message }= useSelector((state)=>state.coins)
  const [id, setId]=useState("bitcoin")
  const [days, setDays]=useState("30")
  const handleChange = (e) => {
    setId(e.target.value)
  }
  const handleDays = (e)=>{
    setDays(e.target.value)
  }


  useEffect(() => {
    dispatch(fetchCoinTime({id,days}));
    dispatch(reset())
  }, [id,dispatch, reset, days]);
  return (
    <div>
        <button>
          <select 
            name="currency"
            onChange={handleChange}
            value={id}>
            {coins.map((coin)=>(
              <option key={coin.id} value={coin.id}>{coin.name}</option>
            ))}
          </select>
          <button>
            <select name="days" onChange={handleDays} value={days}>
              <option value="1">1</option>
              <option value="7">7</option>
              <option value="30">30</option>
            </select>
          </button>
        </button>
    </div>
  )
}

export default ChartComponent
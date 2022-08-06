import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoinTime, reset } from '../features/charts/chartSlice'

const ChartComponent = () => {

  const dispatch=useDispatch()
  const { coins, isLoading, isError, isSuccess, message }= useSelector((state)=>state.coins)

  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setLoading(prevState=>!prevState)
  }, [coins, isLoading])
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
    //console.log()
    dispatch(reset())
  }, [id,dispatch, reset, days]);
  return (
    <div>
        <button>
          {loading?<h1>Loading</h1>:(<select 
            name="currency"
            onChange={handleChange}
            value={id}>
            {coins?.map((coin)=>(
              <option key={coin.id} value={coin.id}>{coin.name}</option>
            ))}
          </select>)}
          
          {/* <button>
            <select name="days" onChange={handleDays} value={days}>
              <option value="1">1</option>
              <option value="7">7</option>
              <option value="30">30</option>
            </select>
          </button> */}
          <button value="1" onClick={handleDays}>1D</button>
          <button value="7" onClick={handleDays}>1W</button>
          <button value="30" onClick={handleDays}>1M</button>
          <button value="90" onClick={handleDays}>3M</button>
          <button value="365" onClick={handleDays}>1Y</button>
        </button>
        
    </div>
  )
}

export default ChartComponent
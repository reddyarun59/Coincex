import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoinTime, reset } from '../features/charts/chartSlice'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {

  const dispatch=useDispatch()
  const { coins, isLoading, isError, isSuccess, message }= useSelector((state)=>state.coins)
  const {coinTime} =useSelector(state=>state.coinTime)
  //const [coinChartData, setCoinChartData]=useState(coinTime)
  console.log(coinTime)

  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setLoading(prevState=>!prevState)
  }, [coins, isLoading])
  const [id, setId]=useState("bitcoin")
  const [days, setDays]=useState(30)
  const handleChange = (e) => {
    setId(e.target.value)
  }
  const handleDays = (e)=>{
    setDays(e.target.value)
  }


  useEffect(() => {
    dispatch(fetchCoinTime({id,days}));
  return ()=>{
      dispatch(reset())
    }
  }, [id,dispatch, days]);

  return (
    <div className="bg-white rounded-md"> 
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
          <div className="flex justify-between">

            <button value={1} onClick={handleDays}>1D</button>
            <button value={7} onClick={handleDays}>1W</button>
            <button value={30} onClick={handleDays}>1M</button>
            <button value={90} onClick={handleDays}>3M</button>
            <button value={365} onClick={handleDays}>1Y</button>
          </div>
        </button>
        <div>
        <Line height="400"
              data={{
                labels: coinTime?.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time :date.getUTCFullYear();
                }),

                datasets: [
                  {
                    data: coinTime?.map((coin) => coin[1]),
                    pointRadius: 0,
                    label: `${id.toUpperCase()}
                    Market Price`,
                    borderColor: "#328213",
                  },
                ],
              }}
              options={{maintainAspectRatio: false ,
                plugins: {
                  legend: {
                    display: false,
                    labels: {
                      usePointStyle: true,
                      pointStyle: "circle"
                      // boxWidth: 5
                    }
                  },
                  title: {
                    display: true,
                    text: `${id.toUpperCase()}`,
                    padding: {
                      bottom: 30
                    },
                    weight: "bold",
                    color: "#00325c",
                    font: {
                      size: 13
                    },
                    align: "end"
                  },
                  
                  datalabels: {
                    display: false,
                    labels: {
                      title: {
                        font: {
                          weight: "bold",
                          size:18
                        }
                      },
                    },}
                }}}
            />
        </div>
    </div>
  )
}

export default ChartComponent
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

  //setting the loading state
  const [loading, setLoading] = useState(true)
  //changing the loading state
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

  //dispatching the api to get coins data
  useEffect(() => {
    dispatch(fetchCoinTime({id,days}));
  return ()=>{
      dispatch(reset())
    }
  }, [id,dispatch, days]);

  return (
    <div className="bg-white rounded-md p-4"> 

      <div className="flex justify-between">
        <div className="w-full flex justify-around">

          <button value={1} onClick={handleDays} className="bg-slate-300 px-2 py-1 rounded-md">1D</button>
          <button value={7} onClick={handleDays} className="bg-slate-300 px-2 py-1 rounded-md">1W</button>
          <button value={30} onClick={handleDays} className="bg-slate-300 px-2 py-1 rounded-md">1M</button>
          <button value={90} onClick={handleDays} className="bg-slate-300 px-2 py-1 rounded-md">3M</button>
          <button value={365} onClick={handleDays} className="bg-slate-300 px-2 py-1 rounded-md">1Y</button>
        </div>

      <div>
          {loading?<h1>Loading</h1>:(<select 
            name="currency"
            onChange={handleChange}
            value={id} className="bg-slate-100 w-20 h-8 text-center text-lg font-semibold rounded-md list-item">
            {coins?.map((coin)=>(
              <option id="blah" key={coin.id} value={coin.id} className="text-center text-lg">{coin.name}</option>
            ))}
          </select>)}
        </div>
        <div className="px-4">
            <select className="bg-slate-100 h-8 text-center text-lg font-semibold rounded-md list-item">
              <option>Line Chart</option>
              <option>Bar Chart</option>
            </select>
        </div>
      </div>
          
          
  
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
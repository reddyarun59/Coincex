import React from 'react'
import ChartComponent from './components/ChartComponent'
import Coins from './components/Coins'
import Exchange from './components/Exchange'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'


const App = () => {
  //various components
  return (
    <div className="flex flex-col ">
      <Header/>
      <div className="bg-white">

        <div className="grid grid-cols-7 gap-4 px-10 py-10 bg-violet-100 mx-20 my-10 rounded-lg">
          
            <div className="col-span-5">
              <Navbar/>
              <ChartComponent/>
              <div className="grid gap-2 grid-cols-2 ">
                <Portfolio/>
                <Exchange/>
              </div>
            </div>
            <div className="col-span-2">
              <Coins/>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
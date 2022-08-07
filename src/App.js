import { useSelector } from "react-redux";
import ChartComponent from "./components/ChartComponent";
import Coins from "./components/Coins";
import Exchange from "./components/Exchange";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  const { coins, isLoading, isError, isSuccess, message }= useSelector((state)=>state.coins)
      return (
        <div className="flex flex-col ">
          <Header/>
          <div className="grid grid-cols-7 gap-4 px-20 py-12 bg-blue-200">
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
      );
    }

  

export default App;

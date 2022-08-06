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
        <div className="flex flex-col">
          <Header/>
          <div className="bg-white">
            <div className="flex bg-slate-500">
              <Navbar/>
              <Coins/>
              <ChartComponent/>
              <Portfolio/>
              <Exchange/>
    
            </div>
    
          </div>
        </div>
      );
    }

  

export default App;

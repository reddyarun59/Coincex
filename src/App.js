import ChartComponent from "./components/ChartComponent";
import Coins from "./components/Coins";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <Header/>
      <div className="bg-white">
        <div className="flex bg-slate-500">
          <Navbar/>
          <Coins/>
          <ChartComponent/>

        </div>

      </div>
    </div>
  );
}

export default App;

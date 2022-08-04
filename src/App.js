import ChartComponent from "./components/ChartComponent";
import Coins from "./components/Coins";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen">
      <Header/>
      <div className="bg-white">
        <div className="flex bg-slate-500 mx-36 my-8">
          <Navbar/>
          <Coins/>
          <ChartComponent/>

        </div>

      </div>
    </div>
  );
}

export default App;

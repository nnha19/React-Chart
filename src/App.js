import "./App.css";
import PieChart from "./components/PieChart/PieChart";
import BarChartComponent from "./components/BarChart/BarChart";
import AddPeople from "./components/AddPeople/AddPeople";

function App() {
  return (
    <div className="app">
      <AddPeople />
      <div className="charts">
        <PieChart />
        <BarChartComponent />
      </div>
    </div>
  );
}

export default App;

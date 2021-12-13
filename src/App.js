import "./App.css";
import PieChart from "./components/PieChart/PieChart";
import BarChartComponent from "./components/BarChart/BarChart";
import AddPeople from "./components/AddPeople/AddPeople";
import { useEffect, useState } from "react";
import { datas } from "./FAKE_DATA";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(datas);
  }, []);

  return (
    <div className="app">
      <AddPeople setPeople={setPeople} />
      {people.length > 0 ? (
        <>
          <div className="charts">
            <PieChart people={people} />
            <BarChartComponent people={people} />
          </div>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default App;

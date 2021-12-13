import "./App.css";
import PieChart from "./components/PieChart/PieChart";
import BarChartComponent from "./components/BarChart/BarChart";
import AddPeople from "./components/AddPeople/AddPeople";
import { useEffect, useState } from "react";
import { datas } from "./FAKE_DATA";
import axios from "axios";
function App() {
  const [people, setPeople] = useState([]);
  const [age, setAge] = useState([]);
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    //  Get Age
    (async () => {
      const resp = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/pie`,
      });
      setGenders(resp.data);
    })();
  }, []);

  useEffect(() => {
    //  Get Gender
    (async () => {
      const resp = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/bar`,
      });
      setAge(resp.data);
    })();
  }, []);

  return (
    <div className="app">
      <AddPeople setGenders={setGenders} setAge={setAge} />

      <div className="charts">
        {genders.length > 0 && <PieChart genders={genders} />}
        {age.length > 0 && <BarChartComponent age={age} />}
      </div>
    </div>
  );
}

export default App;

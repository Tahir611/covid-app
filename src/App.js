import React, { useState } from "react";
import Cards from "./components/Cards/Cards";
import Countrypicker from "./components/countrypicker/Countrypicker";
import Chart from "./components/chart/Chart";

const App = () => {
  const [confirm, setConfirm] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [isCountry, setIsCountry] = useState([]);
  const [chart, setChart] = useState([])
// console.log(isCountry);

  return (
    <>
      <Cards
        confirm={confirm}
        recovered={recovered}
        deaths={deaths}
        isCountry={isCountry}
        setChart={setChart}
      />
      <Countrypicker
        setConfirm={setConfirm}
        setDeaths={setDeaths}
        setRecovered={setRecovered}
        setIsCountry={setIsCountry}
      />
      <Chart
        confirm={confirm}
        recovered={recovered}
        deaths={deaths}
        isCountry={isCountry}
        chart={chart}
      />
    </>
  );
};

export default App;

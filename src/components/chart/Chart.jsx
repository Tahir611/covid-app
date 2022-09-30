import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
// import "./BarChart.css";
import {BarChart, Bar, CartesianGrid, XAxis, YAxis} from "recharts";
import {LineChart, Tooltip, Legend, Line} from "recharts";

const Chart = (props) => {
  let [dailySummary, setDailySummary] = useState([]);
  const totalSummary = async () => {
    try {
      let mySummary = await axios.get("https://covid19.mathdro.id/api/daily");
      setDailySummary(mySummary.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    totalSummary();
  }, []);

  // BarChart Data
  const data = [
    {name: "Infected", infected: props.confirm},
    {name: "Recovered", recovered: props.recovered},
    {name: "Deaths", deaths: props.deaths},
  ];
  // console.log(data.name)

  // LineChart Data
  const Globaldata = [
    {
      Infected: dailySummary.map((confirmed) => {
        
        return confirmed.confirmed.total;
      }),
    },
    {
      deaths: dailySummary.map((deaths) => {
        

        return deaths.deaths.total;
      }),
    },
    {
      Infected: dailySummary.map((date) => {
       
        return date.reportDate;
      }),
    },
  ];

  return (
    <>
      {props.isCountry ? (
        <div className="container">
        <BarChart className="barChart" width={730} height={250} data={data}>
          {/* {console.log(data)} */}
          <Bar dataKey="infected" fill="rgba(0, 0, 255, 0.5)" />
          <Bar dataKey="recovered" fill="rgba(0, 255, 0, 0.5)" />
          <Bar dataKey="deaths" fill="rgba(255, 0, 0, 0.5)" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <YAxis />
        </BarChart>
        </div>
      ) : (

        <div className="container">

        <LineChart
          className="barChart"
          width={730}
          height={250}
          data={Globaldata}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        > 
          {/* {console.log(Globaldata)} */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Infected" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Infected"
            stroke="rgba(0, 0, 255, 0.5)"
          />
          <Line
            type="monotone"
            dataKey="Deaths"
            stroke="rgba(255, 0, 0, 0.5)"
          />
        </LineChart>
        </div>

        
       )} 
    </>
  );
}
export default Chart;

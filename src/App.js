import { useState } from "react";
import Select from 'react-select'
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],

  });


  return (
    <div className="App">

      <div style={{ width: 700 }}>
        <div style={{width: "100%",display: "flex", flexWrap: "wrap",
  flexDirection: "row", justifyContent: "space-between"}}>
          <div>
            <Select options={options} />
          </div>
          <div >
            <Select options={options} />
          </div>
          <div >
            <Select options={options} />
          </div>
        </div>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;

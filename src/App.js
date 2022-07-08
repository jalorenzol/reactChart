import React, { useState } from "react";
import Select from 'react-select'
import "./App.css";
import BarChart from "./components/BarChart";
import { SalesData } from "./Data";
import { SelectOptions } from "./Data";
import { SelectTecnoOptions } from "./Data";
import { SelectMiscelOptions } from "./Data";
import { SelectFoodOptions } from "./Data";
import { SelectHomeOptions } from "./Data";
import { SelectLaptopsOptions } from "./Data";
import { SelectDesktopOptions } from "./Data";
import { SelectWomenswearOptions } from "./Data";
import { SelectClothingOptions } from "./Data";
import { SelectShoesOptions } from "./Data";
import { SelectDessertsOptions } from "./Data";
import { SelectMeatsOptions } from "./Data";
import { SelectVegetablesOptions } from "./Data";
import * as ReactDOM from 'react-dom';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]
// const options2 = [
//   { value: "rico", label: 'Rico' }
// ]

// const options = SalesData.

function App() {
  const [userData] = useState({
    labels: SalesData.map((data) => data.month),
    datasets: [
      {
        label: "Product sales",
        data: SalesData.map((data) => data.sales),
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



  const optionSelect = (e) => {
    if (e.value === SelectOptions[0].value) {
      ReactDOM.render(<Select
        id="2"
        options={SelectTecnoOptions} 
        onChange={typesSelect}/>,
        document.getElementById("2"));
    }
    else if (e.value === SelectOptions[1].value) {
      ReactDOM.render(<Select
        id="2"
        options={SelectMiscelOptions}
        onChange={typesSelect} />,
        document.getElementById("2"));
    }
    else if (e.value === SelectOptions[2].value) {
      ReactDOM.render(<Select
        id="2"
        options={SelectFoodOptions}
        onChange={typesSelect} />,
        document.getElementById("2"));
    }
    console.log(e);;
  };

  const typesSelect = (e) => {
    if (e.value === SelectTecnoOptions[0].value) {
      ReactDOM.render(<Select
        id="3"
        options={SelectHomeOptions} />,
        document.getElementById("3"));
    }
    else if (e.value === SelectTecnoOptions[1].value) {
      ReactDOM.render(<Select
        id="3"
        options={SelectLaptopsOptions} />,
        document.getElementById("3"));
    }
    else if (e.value === SelectTecnoOptions[2].value) {
      ReactDOM.render(<Select
        id="3"
        options={SelectDesktopOptions} />,
        document.getElementById("3"));
    }
    else if (e.value === SelectMiscelOptions[0].value) {
      ReactDOM.render(<Select
        id="3"
        options={SelectWomenswearOptions} />,
        document.getElementById("3"));
    }
    else if (e.value === SelectMiscelOptions[1].value) {
      ReactDOM.render(<Select
        id="3"
        options={SelectClothingOptions} />,
        document.getElementById("3"));
    }
    else if (e.value === SelectMiscelOptions[2].value) {
      ReactDOM.render(<Select
        id="3"
        options={SelectShoesOptions} />,
        document.getElementById("3"));
    }
    else if (e.value === SelectFoodOptions[0].value) {
      ReactDOM.render(<Select
        id="3"
        options={SelectDessertsOptions} />,
        document.getElementById("3"));
    }
    else if (e.value === SelectFoodOptions[1].value) {
      ReactDOM.render(<Select
        id="3"
        options={SelectMeatsOptions} />,
        document.getElementById("3"));
    }
    else if (e.value === SelectFoodOptions[2].value) {
      ReactDOM.render(<Select
        id="3"
        options={SelectVegetablesOptions} />,
        document.getElementById("3"));
    }
    console.log(e);;
  };


  return (
    <div className="App">

      <div style={{ width: 700 }}>
        <div style={{
          width: "100%", display: "flex", flexWrap: "wrap",
          flexDirection: "row", justifyContent: "space-between"
        }}>
          <div>
            <Select
              id="1"
              placeholder="Categories"
              options={SelectOptions}
              onChange={optionSelect}
            />
          </div>
          <div >
            <Select
              id="2"
              placeholder="Tipos"
               />
          </div>
          <div >
            <Select
              id="3"
              placeholder="Marcas"
               />
          </div>
        </div>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;

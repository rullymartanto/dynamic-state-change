import React from "react";
import ReactDOM from "react-dom";

import CostTable from "./CostTable";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Cost Table Example</h1>
      <CostTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

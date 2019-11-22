import React, { useState } from "react";

import "./CostTable.css";

const _defaultCosts = [
  {
    name: "Rice",
    price: 40
  },
  {
    name: "Noodle",
    price: 20
  }
];

const _initialPerson = {
  firstname: "",
  age: ""
};

const CostTable = () => {
  const [costs, setCosts] = useState(_defaultCosts);
  const [person, setPerson] = useState(_initialPerson);
  const handleCostsChange = (event, index) => {
    const _tempCosts = [...costs];
    const { name, value} = event.target;
    _tempCosts[index][name] = value;

    setCosts(_tempCosts);
  };

  const addNewCost = () => {
    setCosts(prevCosts => [...prevCosts, { name: "", price: 0 }]);
  };

  const getTotalCosts = () => {
    return costs.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  };

  const handlePersonsChange = (e) => {
    const { name, value } = e.target;
    setPerson(prevPerson => {
     return { ...prevPerson, [name] : value}
    })
  }
  return (
    
    <div className="table">
      <div className="table-title">Food costs</div>
      <input
        name="firstname"
        type="text"
        value={person.firstname}
        onChange={handlePersonsChange}
      />
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Item</div>
            </div>
            <div className="table-data">
              <div>Price</div>
            </div>
          </div>
        </div>
        <div className="table-body">
          {costs.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={e => handleCostsChange(e, index)}
                />
              </div>
              <div className="table-data">
                <input
                  name="price"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={e => handleCostsChange(e, index)}
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <button onClick={addNewCost}>+</button>
            </div>
          </div>
        </div>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Total</div>
            </div>
            <div className="table-data">
              <div>{getTotalCosts()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostTable;

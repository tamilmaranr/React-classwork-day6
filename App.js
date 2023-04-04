import React, { Component } from 'react';
import SoapList from './SoapList';
import FoodList from './FoodList';
import HOC from './Hoc';


const SoapsData = [
  {
      id: 1,
      name: 'Pears'
        
  },
  {
      id: 2,
      name: 'Dove'
  },
  {
      id: 3,
      name: 'Hamam'
  }
];
const FoodsData = [
  {
      id: 1,
      name: 'Lays'
        
  },
  {
      id: 2,
      name: 'Bingo'
  },
  {
      id: 3,
      name: 'Doritos'
  }
];

const Soaps = HOC(
  SoapList,
  SoapsData
);

const Foods = HOC(
  FoodList,
  FoodsData
);


class App extends Component {
  render() {
    return (
      <div>
        <Soaps></Soaps>
        <Foods></Foods>
      </div>
    )
  }
}

export default App
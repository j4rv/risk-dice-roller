import React from 'react';
import ReactDom from 'react-dom';
import RiskDiceRoller from './RiskDiceRoller';

it.skip("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RiskDiceRoller />, div);
})
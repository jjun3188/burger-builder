import React from 'react';

import classes from './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

import classes from './BuildControls.css';

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.}
  </div>
);

export default buildControls;

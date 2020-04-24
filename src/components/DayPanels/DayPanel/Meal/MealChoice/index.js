import React from 'react';
import classes from './MealChoice.module.css';

const mealChoice = (props) => (
  <div className={classes.MealChoice}>
    <p>{props.choice}</p>
    <p
      onClick={() => props.removeMeal(props.day, props.meal, props.choice)}
      className={classes.Cancel}
    >
      X
    </p>
  </div>
);

export default mealChoice;

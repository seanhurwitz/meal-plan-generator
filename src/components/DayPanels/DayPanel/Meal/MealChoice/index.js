import React from 'react';
import classes from './MealChoice.module.css';

const mealChoice = (props) => {
  return (
    <div className={classes.MealChoice}>
      <p>{props.choice[0]}</p>
      <section className={classes.RightButtons}>
        <div
          className={[classes.Type, classes[props.choice[1]]].join(' ')}
        ></div>
        <div
          onClick={() => props.removeMeal(props.day, props.meal, props.choice)}
          className={classes.Cancel}
        >
          X
        </div>
      </section>
    </div>
  );
};

export default mealChoice;

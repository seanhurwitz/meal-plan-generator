import React from 'react';
import Meal from './Meal';
import classes from './DayPanel.module.css';

const dayPanel = (props) => (
  <div className={classes.DayPanel}>
    <h2 style={{ color: props.headerColor }}>{props.day}</h2>
    <div>
      {Object.keys(props.data).map((meal) => (
        <Meal
          key={meal}
          day={props.day}
          meal={meal}
          choices={props.data[meal]}
          addMeal={props.addMeal}
          removeMeal={props.removeMeal}
        />
      ))}
    </div>
  </div>
);

export default dayPanel;

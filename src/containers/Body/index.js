import React from 'react';
import { DayPanels } from '../../components';
import classes from './Body.module.css';

const body = (props) => (
  <div className={classes.Body}>
    <DayPanels
      days={props.days}
      addMeal={props.addMeal}
      removeMeal={props.removeMeal}
    />
  </div>
);

export default body;

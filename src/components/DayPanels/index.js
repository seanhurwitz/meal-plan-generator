import React from 'react';
import DayPanel from './DayPanel';
import classes from './DayPanels.module.css';

const dayPanels = (props) => (
  <div className={classes.DayPanels}>
    {Object.keys(props.days).map((day, idx) => (
      <DayPanel
        key={day}
        day={day}
        headerColor={idx % 2 === 0 ? 'mediumslateblue' : 'grey'}
        data={props.days[day]}
        addMeal={props.addMeal}
        removeMeal={props.removeMeal}
      />
    ))}
  </div>
);

export default dayPanels;

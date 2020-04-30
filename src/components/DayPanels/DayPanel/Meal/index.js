import React, { Fragment, useContext } from 'react';
import MealChoice from './MealChoice';
import classes from './Meal.module.css';
import { AddMealModalContext } from '../../../../context';

const Meal = (props) => {
  const addingMeal = useContext(AddMealModalContext);
  return (
    <Fragment>
      <div className={classes.Meal}>
        <section className={classes.Title}>
          <h5>
            {props.meal} ({props.choices.length})
          </h5>
          <p onClick={() => addingMeal(props.day, props.meal)}>+</p>
        </section>
        <div className={classes.MealChoiceBox}>
          {props.choices.length > 0 &&
            props.choices.map((choice, idx) => (
              <MealChoice
                key={idx}
                choice={choice}
                removeMeal={props.removeMeal}
                day={props.day}
                meal={props.meal}
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
  // }
};

export default Meal;

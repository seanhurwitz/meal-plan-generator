import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import classes from './Header.module.css';

const header = (props) => {
  return (
    <div className={classes.Header}>
      <h1>MY MEAL PLAN GENERATOR</h1>
      <div className={classes.Generate}>
        <Button clicked={props.generatePlan}>GENERATE!</Button>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName={classes.active}>
              MEALS
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/settings" activeClassName={classes.active}>
              SETTINGS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default header;

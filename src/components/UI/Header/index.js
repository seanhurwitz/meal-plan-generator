import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import Radio from "../Radio";
import classes from "./Header.module.css";

const header = (props) => {
  const radioOptions = [`Today`, "Weekly"];
  return (
    <div className={classes.Header}>
      <h1>MY MEAL PLAN GENERATOR</h1>
      <div className={classes.Generate}>
        <Radio options={radioOptions} changePlan={props.changePlan} />
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

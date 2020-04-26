import React from "react";
import classes from "./Plan.module.css";

const plan = (props) => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = days[new Date(Date.now()).getDay()];
  const planSet = Object.keys(props.meals).map((day) => ({
    day,
    meals: props.meals[day],
  }));
  const plan =
    props.type === "Weekly"
      ? planSet
      : planSet.filter((dayPlan) => dayPlan.day === today);

  return (
    <div className={classes.MasterPlan}>
      {plan.map((day) => (
        <div key={day.day} className={classes.Plan}>
          <h1>{day.day}</h1>
          {Object.keys(day.meals).map((meal) => (
            <div key={meal}>
              <h2>{meal}</h2>
              <p>
                {
                  day.meals[meal][
                    Math.floor(Math.random() * day.meals[meal].length)
                  ]
                }
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default plan;

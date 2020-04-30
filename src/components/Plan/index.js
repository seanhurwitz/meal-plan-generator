import React from 'react';
import classes from './Plan.module.css';
import { days as daysList } from '../../days';

const arrangeDays = (startDay, planType) => {
  let dayList = [...daysList];
  if (planType === 'Today') {
    dayList = [dayList[new Date(Date.now()).getDay()]];
  } else {
    const startDayIndex = dayList.indexOf(startDay.toLowerCase());
    dayList = dayList
      .slice(startDayIndex, 7)
      .concat(dayList.slice(0, startDayIndex));
  }
  return dayList;
};
const plan = (props) => {
  const days = arrangeDays(props.settings.startDay, props.settings.planType);
  const plan = days.map((day) => ({
    day,
    meals: Object.keys(props.meals[day]).map((meal) => ({
      meal,
      randomChoice:
        props.meals[day][meal][
          Math.floor(Math.random() * props.meals[day][meal].length)
        ],
    })),
  }));
  console.log(plan);
  return (
    <table className={classes.Table}>
      <tbody>
        <tr className={classes.TableHeader}>
          <th>Day</th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Supper</th>
        </tr>
        {plan.map((day) => {
          return (
            <tr key={day.day}>
              <th>{day.day}</th>
              {day.meals.map((meal) => (
                <td
                  key={`${day.day} ${meal.meal}`}
                  className={classes[meal.randomChoice[1]]}
                >
                  {meal.randomChoice[0]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  // return (
  //   <div className={classes.MasterPlan}>
  //     {plan.map((day) => (
  //       <div key={day.day} className={classes.Plan}>
  //         <h1>{day.day}</h1>
  //         {Object.keys(day.meals).map((meal) => {
  //           const randomMeal =
  //             day.meals[meal][
  //               Math.floor(Math.random() * day.meals[meal].length)
  //             ];
  //           return (
  //             <div key={meal}>
  //               <h2>{meal}</h2>
  //               <p className={classes[randomMeal[1]]}>{randomMeal[0]}</p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default plan;

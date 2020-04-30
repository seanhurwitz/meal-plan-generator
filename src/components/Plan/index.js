import React from 'react';
import classes from './Plan.module.css';

const plan = (props) => {
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const today = days[new Date(Date.now()).getDay()];
  const planSet = Object.keys(props.meals).map((day) => ({
    day,
    meals: props.meals[day],
  }));
  const plan =
    props.type === 'Weekly'
      ? planSet
      : planSet.filter((dayPlan) => dayPlan.day === today);
  return (
    <table className={classes.Table}>
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
            {Object.keys(day.meals).map((meal) => {
              const randomMeal =
                day.meals[meal][
                  Math.floor(Math.random() * day.meals[meal].length)
                ];
              return (
                <td
                  key={`${day.day} ${meal}`}
                  className={classes[randomMeal[1]]}
                >
                  {randomMeal[0]}
                </td>
              );
            })}
          </tr>
        );
      })}
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

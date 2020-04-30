import React from 'react';
import classes from './Radio.module.css';

const radio = (props) => (
  <div className={[classes.Radio, classes[props.config]].join(' ')}>
    {props.options.map((option, idx) => (
      <div
        key={option}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <label htmlFor={option}>{option}</label>
        <input
          type="radio"
          id={option}
          name="choices"
          value={option}
          checked={props.select ? props.select === option : idx === 0}
          onChange={() => props.change(option)}
        />
      </div>
    ))}
  </div>
);

export default radio;

import React from 'react';
import classes from './Person.css';

import './Person.css';

const person = (props) => {
  const input = props.hasOwnProperty('changed') ?
    <input type="text" onChange={props.changed} value={props.name}/> : null;

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        My name is {props.name ? props.name : "Unknown"} and I am {props.age} years old
      </p>
      {input}
    </div>
  )
};

export default person;

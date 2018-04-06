import React from 'react';
import classes from './Cockpit.css';
import Aux from "../../hoc/Aux";

const cockpit = (props) => {
  const statusClasses = [];

  if (props.persons.length <= 2) {
    statusClasses.push(classes.red)
  }

  if (props.persons.length <= 1) {
    statusClasses.push(classes.bold)
  }

  return (
    <Aux>
      <h1>Hi, I'm React App!</h1>
      <p className={statusClasses}>It works</p>
      <button
        className={classes.Button}
        onClick={props.switch}>
        Switch Person
      </button>
      <button
        className={[classes.Button, props.showPersons ? classes.Red : ''].join(' ')}
        onClick={props.toggle}>
        {props.showPersons ? 'Hide persons' : 'Show persons'}
      </button>
    </Aux>
  )
};

export default cockpit;

import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => (
  <div>
    <h1>Hi, I'm React App!</h1>
    <p>It works</p>
    <button
      onClick={props.switch}>
      Switch Person
    </button>
    <button
      className={props.showPersons ? classes.Red : null}
      onClick={props.toggle}>
      {props.showPersons ? 'Hide persons' : 'Show persons'}
    </button>
  </div>
);

export default cockpit;

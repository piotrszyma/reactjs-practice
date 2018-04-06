import React, { Component } from 'react';
import classes from './Person.css';

import './Person.css';
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  render () {
    const input = this.props.hasOwnProperty('changed') ?
      <input type="text" onChange={this.props.changed} value={this.props.name}/> : null;

    return (
      <Aux>
        <p onClick={this.props.clicked}>
          My name is {this.props.name ? this.props.name : "Unknown"} and I am {this.props.age} years old
        </p>
        {input}
      </Aux>
    )
  }
}


export default withClass(Person, classes.Person);

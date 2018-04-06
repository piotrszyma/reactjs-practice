import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'John', age: 28},
      {id: 2, name: 'Manu', age: 18},
      {id: 3, name: 'Charlie', age: 32}
    ],
    currentPerson: 0,
    showPersons: true
  };

  getRandomElementIndex = () => ~~(Math.random() * this.state.persons.length);

  getNextPerson = () => {
    const random = this.getRandomElementIndex();
    return random === this.currentPerson ? random + 1 % this.state.persons.length : random;
  };

  switchNameHandler = () => {
    this.setState({currentPerson: this.getNextPerson()})
  };

  toggleAllPersons = () => {
    this.setState({showPersons: !this.state.showPersons});
  };

  deletePersonHandler = ({personId}) => {
    this.setState({
      persons: this.state.persons.filter((p) => p.id !== personId)
    });
  };

  nameChangedHandler = ({personId, newName}) => {
    this.setState({
      persons: this.state.persons.map(person => person.id === personId ? {...person, name: newName} : person)
    })
  };

  render () {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <h1>All persons</h1>
          <Persons
            changed={this.nameChangedHandler}
            click={this.deletePersonHandler}
            persons={this.state.persons}
          />
        </div>
      );
    }

    let chosenPerson = null;

    if (this.state.persons.length > 0) {
      chosenPerson =
        <div>
          <h1>Chosen person</h1>
          <Person
            name={this.state.persons[this.state.currentPerson].name}
            age={this.state.persons[this.state.currentPerson].age}/>
        </div>
    }

    return (
      <div className={classes['App']}>
        <Cockpit
          showPersons={this.state.showPersons}
          switch={this.switchNameHandler}
          toggle={this.toggleAllPersons}
        />
        {chosenPerson}
        {persons}
      </div>
    );
  }
}

export default App;

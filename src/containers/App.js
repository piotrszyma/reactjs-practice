import React, { PureComponent } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

class App extends PureComponent {
  constructor (props) {
    super(props);
    console.log("[App.js] Inside constructor");
  }

  componentWillMount () {
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount () {
    console.log("[App.js] Inside componentDidMount");
  }

  componentWillUpdate (nextProps, nextState) {
    console.log("[UPDATE App.js] Inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate (nextProps, nextState) {
    console.log("[UPDATE App.js] Inside componentDidUpdate", nextProps, nextState);
  }

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
    console.log("[App.js] Inside render");

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        changed={this.nameChangedHandler}
        clicked={this.deletePersonHandler}
        persons={this.state.persons}
      />;
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
      <Aux>
        <button onClick={() => {
          this.setState({showPersons: true})
        }}>Show Persons
        </button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          switch={this.switchNameHandler}
          toggle={this.toggleAllPersons}
        />
        {chosenPerson}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

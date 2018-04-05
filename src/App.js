import React, { Component } from 'react';
import Radium from 'radium';

import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      ':hover': {
        backgroundColor: 'lightgreen'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = 'red';
      style.color = 'white';

      style[':hover'] = {
        backgroundColor: 'salmon',
      };

      persons = (
        <div>
          <h1>All persons</h1>
          {this.state.persons.map((person, index) =>
            <Person
              changed={(event) => this.nameChangedHandler({personId: person.id, newName: event.target.value})}
              click={() => this.deletePersonHandler({personId: person.id})}
              key={person.id} name={person.name} age={person.age}/>
          )}
        </div>
      )
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

    let classes = [];

    if (this.state.persons.length < 2) {
      classes.push('red');
    }

    if (this.state.persons.length < 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={classes.join(' ')}>It works</p>
        <button
          onClick={this.switchNameHandler}>
          Switch Person
        </button>
        <button
          style={style}
          onClick={this.toggleAllPersons}>
          {this.state.showPersons ? 'Hide persons' : 'Show persons'}
        </button>
        {chosenPerson}
        {persons}
      </div>
    );
  }
}

export default Radium(App);

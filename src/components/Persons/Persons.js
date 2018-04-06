import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor (props) {
    super(props);
    console.log("[Persons.js] Inside constructor");
  }

  componentWillMount () {
    console.log("[Persons.js] Inside componentWillMount");
  }

  componentDidMount () {
    console.log("[Persons.js] Inside componentDidMount");
  }

  componentWillReceiveProps (nextProps, currentProps) {
    console.log("[UPDATE Persons.js] Inside componentWillReceiveProps", nextProps);
  }

  componentWillUpdate (nextProps, nextState) {
    console.log("[UPDATE Persons.js] Inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate (nextProps, nextState) {
    console.log("[UPDATE Persons.js] Inside componentDidUpdate", nextProps, nextState);
  }


  render () {
    return this.props.persons.map((person, index) =>
      <Person
        changed={(event) => this.props.changed({
          personId: person.id,
          newName: event.target.value
        })}
        clicked={() => this.props.clicked({personId: person.id})}
        key={person.id}
        name={person.name}
        age={person.age}
        position={index}/>
    );
  }
}

export default Persons;

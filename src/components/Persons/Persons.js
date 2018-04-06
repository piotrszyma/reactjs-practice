import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) =>
  <Person
    changed={(event) => props.clicked({
      personId: person.id,
      newName: event.target.value
    })}
    click={() => props.changed({personId: person.id})}
    key={person.id} name={person.name} age={person.age}/>
);

export default persons;

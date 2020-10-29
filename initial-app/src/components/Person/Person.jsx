import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div>
            <p className="desc">Hello friends! I'm {props.name} and I'm {props.age} years old. I'm a {props.gender}</p>
        </div>
    );
}

export default Person;
import React from 'react';
import './NewPerson.css';

const NewPerson = (props) => {
    const newPersonHandler = (event) => {
        event.preventDefault();
        const newPerson = {
            id: Math.random().toString(),
            name: 'Sabilla',
            age: 19,
            gender: 'Female'
        };

        props.onAddPerson(newPerson);
    };

    return (
        <div>
            <form className='new-person' onSubmit={newPersonHandler}>
                <input type='text' placeholder='input the name' />
                <input type='number' placeholder='input your age' />
                <select>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button type='submit' className='button'>Add Person</button>
            </form>
        </div>
    );
};

export default NewPerson;
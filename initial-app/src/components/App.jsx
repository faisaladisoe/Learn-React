import React, {useState} from 'react';
import Person from './Person/Person';
import NewPerson from './NewPerson/NewPerson';

const App = () => {
    const [clickMe, setClickMe] = useState([
        {id: 1, name: 'Faisal', age: 19, gender: 'Male'},
        {id: 2, name: 'Farah', age: 20, gender: 'Female'},
        {id: 3, name: 'Yasmin', age: 19, gender: 'Female'}
    ]);

    const addHandler = (newPerson) => {
        clickMe.push(newPerson);
        console.log(clickMe);
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'red'}}>Hello, World!</h1>
            {clickMe.map((el) => (
                <Person name={el.name} age={el.age} gender={el.gender}/>
            ))}
            <NewPerson onAddPerson={addHandler} />
        </div>
    );
}

export default App;
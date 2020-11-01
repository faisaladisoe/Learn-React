import React from 'react';
import './Greeting.css';

const Greeting = props => {
    return (
        <div className='greeting__container'>
            <div className='greeting__subcontainer'>
                <h1 id='greeting__tagline'>
                    Hello, { props.name }!
                </h1>
            </div>
        </div>
    );
}

export default Greeting;

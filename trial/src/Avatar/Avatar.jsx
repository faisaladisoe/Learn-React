import React from 'react';
import './Avatar.css';

const Avatar = props => {
    return (
        <div className='avatar__container'>
            <div className="container">
                <div className="row">
                    {props.user.map((user) => (
                        <div className="col avatar__subcontainer">
                            <img id='avatar__img' src={user.avatarURL} alt={user.name} />
                            <h3 id='avatar__name'>{user.name}</h3>
                            <h5 id='avatar__age'>{user.age} years old</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Avatar;
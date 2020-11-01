import React from 'react';
import Avatar from './Avatar/Avatar';

const UserInput = props => {
    return (
        <div>
            <Avatar 
                user = { props.author }
            />
        </div>
    );
}

export default UserInput;
import React from 'react';
import Avatar from './Avatar';

const UserInput = props => {
    return (
        <div>
            <Avatar 
                user = { props.author }
            />
            { props.comment }
        </div>
    );
}

export default UserInput;
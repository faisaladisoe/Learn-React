import React from 'react';

const Avatar = props => {
    return (
        <div>
            <img src={ props.user.avatarURL } alt={ props.user.name } />
            <br/>
            Name : { props.user.name }
            <br/>
            Age : { props.user.age }
        </div>
    );
}

export default Avatar;
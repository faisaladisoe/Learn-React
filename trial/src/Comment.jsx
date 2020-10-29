import React from 'react';
import UserInput from './UserInput';
import DateCreated from './DateCreated';

const Comment = props => {
    const author = {
        avatarURL : 'https://cdn1-production-images-kly.akamaized.net/zDoAWrDRXL7SsY_vISbvtdjmvvQ=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1636957/original/086220200_1498893943-17587457_177671969415908_2001025142947315712_n.jpg',
        name : 'Raline Shah',
        age : 35
    };

    return (
        <div>
            <UserInput 
                author = { author }
                comment = { props.comment }
            />
            <DateCreated />
        </div>
    );
}

export default Comment;
import React from 'react';
import UserInput from './UserInput';
import DateCreated from './DateCreated';

const Comment = props => {
    const author = [
        {
            avatarURL : 'https://cdn1-production-images-kly.akamaized.net/zDoAWrDRXL7SsY_vISbvtdjmvvQ=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1636957/original/086220200_1498893943-17587457_177671969415908_2001025142947315712_n.jpg',
            name : 'Raline Shah',
            age : 35
        },
        {
            avatarURL : 'https://www.wowkeren.com/display/images/photo/2018/08/16/00220922.jpg',
            name : 'Pamela Bowie',
            age : 26
        },
        {
            avatarURL : 'https://awsimages.detik.net.id/community/media/visual/2020/03/03/f5330293-bc3e-454c-a3d7-d03b19b75367_169.jpeg?w=700&q=90',
            name : 'Adinda Thomas',
            age : 27
        },
        {
            avatarURL : 'https://cdn-2.tstatic.net/jateng/foto/bank/images/yuki-kato_20180918_224507.jpg',
            name : 'Yuki Kato',
            age : 25
        },
    ];

    return (
        <div>
            <UserInput
                author = { author }
            />
            <DateCreated />
        </div>
    );
}

export default Comment;
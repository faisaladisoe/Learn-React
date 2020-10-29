import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
    id: 'p1',
    title: 'Empire State Building',
    desc: 'One of the most famous sky scrapper in the world',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
    addr: '20 W 34th St, New York, NY 10001, United States',
    loc: {
        lat: 40.7484405,
        lng: -73.9878531
    },
    creator: 'u1'
    }
];

const UserPlaces = () => {
    const userid = useParams().userID;
    const exactPlace = DUMMY_PLACES.filter(place => (place.creator === userid));

    return (
        <PlaceList item={exactPlace} />
    );
};

export default UserPlaces;
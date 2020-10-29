import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = (props) => {
    if (props.item.length === 0) {
        return (
            <div className='place-list center'>
                <Card>
                    <h2>No Places found!</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        );
    }

    return (
        <ul className='place-list'>
            {props.item.map(place => (
                <PlaceItem 
                    key={place.id}
                    id={place.id}
                    image={place.image}
                    title={place.title}
                    description={place.desc}
                    address={place.addr}
                    creatorID={place.creator}
                    coordinates={place.loc}
                />
            ))}
        </ul>
    );
};

export default PlaceList;

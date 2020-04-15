import React from 'react';

const MapMethod = () => {
    const myArray = [1,2,3,4,5,6,7,8,9,10];

    const list = myArray.map((numerals) =>
        <li>{numerals}</li>
    );
    return (
        <div>
            MAPMETHOD
            <ul>

           {list}
            </ul>
        </div>
    );
}

export default MapMethod;

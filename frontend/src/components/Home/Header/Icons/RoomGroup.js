import React from 'react';
import SingleRoomRequest from './SingleRoomRequest';

const RoomGroup = (props) => {
    return (
        <div className='border-gray-600 border-[1px] p-1 my-2'>
            <div className='font-medium'>
                {props.name}
            </div>
            <SingleRoomRequest />
            <SingleRoomRequest />
            <SingleRoomRequest />
            <div className='text-blue-100 hover:underline cursor-pointer'>
                view more...
            </div>
        </div>
    );
};

export default RoomGroup;
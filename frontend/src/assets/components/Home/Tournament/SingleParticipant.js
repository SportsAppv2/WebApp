import React from 'react';
import { useSelector } from 'react-redux';

const SingleParticipant = (props) => {
    const data = useSelector((state) => state.tournament);
    return (
        <div className='bg-[#333030] w-[300px] h-fit text-white-100 font-medium text-[18px] p-3 rounded-lg m-5 cursor-pointer hover:bg-[#232121]'>
            {props.val.name}
        </div>
    );
};

export default SingleParticipant;
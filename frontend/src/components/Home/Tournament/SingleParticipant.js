import React from 'react';
import { useSelector } from 'react-redux';

const SingleParticipant = (props) => {
    const data = useSelector((state) => state.tournament);
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain' , props.val.name);
    };
    return (
        <div className='bg-[#333030] w-[300px] h-fit text-white-100 font-medium text-[18px] p-3 rounded-lg m-5 cursor-pointer hover:bg-[#232121]' draggable={true} onDragStart={(e) => {handleDragStart(e)}}>
            {props.val.name}
        </div>
    );
};

export default SingleParticipant;
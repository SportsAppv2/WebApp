import React from 'react';
import { useSelector } from 'react-redux';
import SingleParticipant from './SingleParticipant';

const Format2 = (props) => {
    const data = useSelector((state) => state.tournament);
    console.log(data.noOfParticipantPerGroup);
    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        props.onDrop(data);
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    return (
        <div className='bg-[black] h-screen w-[100%] flex'>
            <div className='w-[700px]'>
                {Array.from({length:data.noOfGroups}).map((_, index) => {
                    console.log("First loop");
                    return <div className='bg-gray-600 bg-opacity-20 text-white-100 w-[300px] h-fit rounded-lg shadow-2xl py-2 m-3'
                    key={index}>
                        <div className='text-center'>
                            Group {index}
                        </div>
                        {Array.from({length:data.noOfParticipantPerGroup}).map((_, index) => {
                            console.log("Second Loop");
                            return <div className='bg-gray-600 bg-opacity-50 mx-8 my-5 p-2' key={index} onDrop={handleDrop} onDragOver={handleDragOver}>
                                {props.value}
                            </div>
                        })}
                    </div>
                })}
            </div>
            <div className='w-[600px]'>
                {Array.from(data.allTeamData).map((value, index) => {
                    return (<SingleParticipant val={value}/>)
                })}
            </div> 
        </div>
    );
};

export default Format2;
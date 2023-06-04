import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';
import SingleParticipant from './SingleParticipant';
import {RxCrossCircled} from 'react-icons/rx';

const Format2 = (props) => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();          
    const groupAdd  = (e, index, grpIndex) => {
        dispatch(tournamentActions.groupValuesAdded({key: index+grpIndex*data.noOfParticipantPerGroup, val: e.target.value}));     
    }

    return (
        <div className='bg-[black] h-screen w-[100%] flex'>
            <div className='w-[700px]'>
                {Array.from({length:data.noOfGroups}).map((_, grpIndex) => {
                    return <div className='bg-gray-600 bg-opacity-20 text-white-100 w-[300px] h-fit rounded-lg shadow-2xl py-2 m-3'
                    key={grpIndex}>
                        <div className='text-center'>
                            Group {grpIndex}
                        </div>
                        {Array.from({length:data.noOfParticipantPerGroup}).map((_, index) => {
                            return <div className='bg-gray-600 flex items-center bg-opacity-50 mx-8 my-5 p-2'>
                                <select className='bg-[#1b1a1a] text-white-100 w-full p-1 shadow-2xl rounded-lg'
                                key={index} onChange={(e) => {groupAdd(e,index,grpIndex)}}
                                value={data.groupValues[index+grpIndex*data.noOfParticipantPerGroup] || 'none'}>
                                    <option value="none">Select one</option>
                                    {Array.from(data.allTeamData).map((item) => {
                                        if(!Object.values(data.groupValues).includes(item.key) || data.groupValues[index + grpIndex * data.noOfParticipantPerGroup] === item.key) {
                                            return <option value={item.key} key={`${item.key}-${index}`}>{item.name}</option>
                                        }                                        
                                    })}
                                </select>
                                <RxCrossCircled className='ml-2 text-[22px] hover:text-gray-400 cursor-pointer'
                                onClick={() => {
                                    dispatch(tournamentActions.groupValuesRemoved({key: index+grpIndex*data.noOfParticipantPerGroup}))
                                }}/>
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
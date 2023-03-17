import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlinePlus} from 'react-icons/ai';
import SingleMatch from './SingleMatch';
import { tournamentActions } from '../../../store/tournamentSlice';
import SingleMatch2 from './SingleMatch2';

const Schedule = () => {
    const data = useSelector((state) => state.tournament)
    const dispatch = useDispatch();
    console.log(data);
    const newMatch = () => {
        if(data.matchValues.singleMatch2 == false && data.noOfMatches != 0) {
            alert("First submit the details of the match you have created");
        }else {
            dispatch(tournamentActions.addNoOfMatches());
            dispatch(tournamentActions.resetSingleMatch2());
        }
    }

    return (
        <div className='bg-[#000000] h-screen w-[100%] flex mb-[80px]'>
            <div className='w-[900px]'>
                <div className='text-white-100 flex items-center rounded-lg ml-5 mt-5 sticky top-2 left-2 bg-[#1b1a1a] cursor-pointer hover:bg-[#28282a] w-fit p-2 px-5'
                onClick={() => {newMatch()}}>
                    <div className='mr-2'>
                        Create a match
                    </div>
                    <AiOutlinePlus className='text-[20px]' />
                </div>
                {Array.from({length: data.noOfMatches}).map((item,index) => {
                    if(data.matches[index] && data.matches[index].singleMatch2 == true){
                        
                        return <SingleMatch2 uniqueKey={index}/>
                    }else{
                        
                        return <SingleMatch uniqueKey={index}/>
                        
                    }                    
                })}
            </div>
            <div className=''>
                {Array.from({length:data.noOfGroups}).map((_, grpIndex) => {
                    return <div className='bg-gray-600 bg-opacity-20 text-white-100 w-[300px] h-fit rounded-lg shadow-2xl py-2 m-3'
                    key={grpIndex}>
                        <div className='text-center'>
                            Group {grpIndex}
                        </div>
                        {Array.from({length:data.noOfParticipantPerGroup}).map((_, index) => {
                            return <div className='bg-gray-600 flex items-center bg-opacity-50 mx-8 my-5 p-2'>
                                {data.allTeamData.map((item) => {
                                    if(item.key === data.groupValues[index + grpIndex * data.noOfParticipantPerGroup]) {
                                        return <div>{item.name}</div>
                                    }
                                })}
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    );
};

export default Schedule;
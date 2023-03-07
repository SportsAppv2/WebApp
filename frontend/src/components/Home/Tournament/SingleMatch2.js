import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BsFillPencilFill} from 'react-icons/bs'
import { tournamentActions } from '../../../store/tournamentSlice';

const SingleMatch2 = (props) => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    const editInfo = () => {
        dispatch(tournamentActions.closeSingleMatch2({key: props.uniqueKey}));
        dispatch(tournamentActions.setMatchValues({key: props.uniqueKey}));
    }
    return (
        <div className='w-[400px] p-2 rounded-xl my-5 ml-5 h-fit text-white-100 bg-[#1b1a1a]'>
            <div className='text-[#5D5FEF] font-medium flex items-center mx-5 justify-between'>
                <div>
                    {data.matches[props.uniqueKey].date}, {data.matches[props.uniqueKey].startTime} - {data.matches[props.uniqueKey].endTime}
                </div>  
                <BsFillPencilFill className='cursor-pointer hover:text-blue-100' 
                onClick={() => {editInfo()}}/>
            </div>
            <div className='flex justify-between items-center my-5 mx-3'>
                <div className='w-[150px] justify-items-center'>
                    <div className='rounded-full w-[50px] h-[50px] ml-[45px]'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="logo" 
                        className='rounded-full object-cover'/>
                    </div>
                    <div className='bg-[#3b3939] mt-3 text-white-100 w-full p-1 shadow-2xl rounded-lg'
                    
                    >
                        {data.allTeamData.map((item) => {
                            if(item.key == data.matches[props.uniqueKey].player1) {
                                return item.name
                            }
                        })}
                    </div>
                </div>
                <div>
                    vs
                </div>
                <div className='w-[150px]'>
                    <div className='rounded-full w-[50px] h-[50px] ml-[45px]'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="logo" 
                        className='rounded-full object-cover'/>
                    </div>
                    <div className='bg-[#3b3939] mt-3 text-white-100 w-full p-1 shadow-2xl rounded-lg'
                    
                    >
                        {data.allTeamData.map((item) => {
                            if(item.key == data.matches[props.uniqueKey].player2) {
                                return item.name
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMatch2;
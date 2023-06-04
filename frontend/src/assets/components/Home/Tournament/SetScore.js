import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {IoIosArrowBack} from 'react-icons/io';
import { tournamentActions } from '../../../store/tournamentSlice';

const SetScore = (props) => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    const [player1 , setPlayer1] = useState("");
    const [player2 , setPlayer2] = useState("");
    return (
        <div className='bg-[black] w-[300px] h-fit text-white-100 absolute top-0 left-11 p-5 border-gray-600 border-[1px] rounded-xl'>
            <div className='flex items-center'>
                <div>
                    <IoIosArrowBack className='text-blue-60 hover:text-[#5D5FEF] cursor-pointer text-[22px]'
                    onClick={() => {dispatch(tournamentActions.toggleSetScore({index: props.index}))}}/>
                </div>
                <div className='font-medium text-[18px] ml-[65px]'>
                    Set Score
                </div>
            </div>            
            <div className=''>
                <div className='my-5'>
                    <div className='text-gray-400'>
                        {data.allTeamData.map((item1) => {
                                if(item1.key == data.matches[props.index].player1) {
                                    return item1.name
                                }
                        })}
                    </div>
                    <input type="text" className='bg-[black] p-2 outline-none border-[1px] border-gray-600 w-full'
                    value={player1} onChange={(e) => {setPlayer1(e.target.value)}}/>
                </div>
                <div className='my-5'>
                    <div className='text-gray-400'>
                        {data.allTeamData.map((item1) => {
                                if(item1.key == data.matches[props.index].player2) {
                                    return item1.name
                                }
                        })}
                    </div>
                    <input type="text" className='bg-[black] p-2 outline-none border-[1px] border-gray-600 w-full'
                    onChange={(e) => {setPlayer2(e.target.value)}}/>
                </div>
            </div>
            <div className='flex items-center justify-center py-3'>
                <button className='px-3 bg-gray-400  text-[black] hover:bg-gray-600 rounded-lg py-1 text-[18px] transition-all'
                onClick={() => {
                    dispatch(tournamentActions.setScores({p1: player1, p2: player2}));
                    dispatch(tournamentActions.toggleSetScore({index: props.index}));
                }}>
                    Confirm
                </button>
            </div>
        </div>            
    );
};

export default SetScore;
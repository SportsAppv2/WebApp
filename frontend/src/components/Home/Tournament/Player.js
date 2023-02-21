import React, { useRef } from 'react';
import {IoIosAddCircleOutline} from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';

const Player = () => {
    const add = useRef("");
    const dispatch = useDispatch();
    return (
        <div className='flex items-center'>
            <input type="text" 
            placeholder='Player 1'
            className='bg-[black] border-gray-600 border-[1px] w-full text-white-100 p-2 outline-none shadow-md'
            onChange={(e) => {dispatch(tournamentActions.addTeamEmail(e.target.value))}}/>
            <IoIosAddCircleOutline className='text-[28px] ml-3 cursor-pointer' ref={add}
            onClick={() => {
                add.current.classList.add("hidden");
            }}/>
        </div>  
    );
};

export default Player;
import React, { useRef } from 'react';
import {MdAddCircleOutline} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';
import {AiOutlineMinusCircle} from 'react-icons/ai';

const Player = () => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    const inputField = useRef("");
    console.log(data);
    const handleChange = (e, index) => {
        dispatch(tournamentActions.addPlayerValues({value: e.target.value,index}));
    }
    const removeField = (index) => {
        console.log("index is", index);
        if(data.teamData.playerCount != 1) {
            dispatch(tournamentActions.removePlayerValues({index}));
        }      
    }

    return (
        <div className=''>
            {Array.from({length:data.teamData.playerCount}).map((_, index) => (
                <div className='flex items-center' key={index} ref={inputField}>
                    <div className='mb-3'>
                        <input type="text" 
                        // value = {data.teamData.playerValues[index]} 
                        placeholder={'Player ' + index}
                        className='bg-[black] border-gray-600 border-[1px] w-full text-white-100 p-2 outline-none shadow-md'
                        onChange={(e) => {handleChange(e, index)}}/>                    
                    </div> 
                    <MdAddCircleOutline className='text-[28px] ml-8 cursor-pointer hover:text-gray-400' 
                    onClick={() => {
                        dispatch(tournamentActions.addInputField());
                    }}/>
                    <AiOutlineMinusCircle className='text-[27px] ml-8 cursor-pointer text-white-100 hover:text-gray-400'
                    onClick={() => {removeField(index)}}/>
                </div>                
            ))}
            
        </div>
        
    );
};

export default Player;
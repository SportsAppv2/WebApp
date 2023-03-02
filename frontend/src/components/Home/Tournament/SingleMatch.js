import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';

const SingleMatch = (props) => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    const matchValues = {};
    console.log(props.key);
    matchValues.key = props.key;
    const submitInfo = () => {
        dispatch(tournamentActions.addMatches(matchValues));
    }
    console.log(data);
    return (
        <div className='w-[400px] p-2 rounded-xl my-5 ml-5 h-fit text-white-100 bg-[#1b1a1a]'>
            <div className='flex justify-between items-center'>
                <div className='w-[150px] justify-items-center'>
                    <div className='rounded-full w-[50px] h-[50px] ml-[45px]'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="logo" 
                        className='rounded-full object-cover'/>
                    </div>
                    <select className='bg-[#3b3939] mt-3 text-white-100 w-full p-1 shadow-2xl rounded-lg'
                    onChange={(e) => {matchValues.player1 = e.target.value}}
                    >
                        <option value="none">Select one</option>
                        {Array.from(data.allTeamData).map((item) => {
                            // if(!Object.values(data.groupValues).includes(item.key) || data.groupValues[index + grpIndex * data.noOfParticipantPerGroup] === item.key) {
                                return <option value={item.key} key={item.key}>{item.name}</option>
                            // }                                        
                        })}
                    </select>
                </div>
                <div>
                    vs
                </div>
                <div className='w-[150px]'>
                    <div className='rounded-full w-[50px] h-[50px] ml-[45px]'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="logo" 
                        className='rounded-full object-cover'/>
                    </div>
                    <select className='bg-[#3b3939] mt-3 text-white-100 w-full p-1 shadow-2xl rounded-lg'
                    onChange={(e) => {matchValues.player2 = e.target.value}}
                    >
                        <option value="none">Select one</option>
                        {Array.from(data.allTeamData).map((item) => {
                            // if(!Object.values(data.groupValues).includes(item.key) || data.groupValues[index + grpIndex * data.noOfParticipantPerGroup] === item.key) {
                                return <option value={item.key} key={item.key}>{item.name}</option>
                            // }                                        
                        })}
                    </select>
                </div>
            </div>
            <div className='flex items-center my-5'>
                <div>
                    Date:
                </div>
                <input type="date" className='bg-[#3b3939] ml-8 border-gray-600 border-[1px] p-1' 
                onChange={(e) => {matchValues.date = e.target.value}}/>
            </div>
            <div className='flex items-center my-5'>
                <div>
                    Start time:
                </div>
                <input type="time" className='bg-[#3b3939] ml-8 border-gray-600 border-[1px] p-1' 
                onChange={(e) => {matchValues.startTime = e.target.value}}/>
            </div>
            <div className='flex items-center my-5'>
                <div>
                    End time:
                </div>
                <input type="time" className='bg-[#3b3939] ml-8 border-gray-600 border-[1px] p-1' 
                onChange={(e) => {matchValues.endTime = e.target.value}}/>
            </div>
            <div className='flex items-center justify-center'>
                <button className='px-3 py-1 text-lg  bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 text-gray-200  shadow-md rounded-xl'
                onClick={() => {submitInfo()}}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default SingleMatch;
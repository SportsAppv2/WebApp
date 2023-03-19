import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';
import SetScore from './SetScore';

const Results = () => {
    const data = useSelector(state => state.tournament);
    const dispatch = useDispatch();
    return (
        <div>
            {Array.from(data.matches).map((item, index) => {
                return <div className='w-[400px] p-2 rounded-xl my-5 ml-5 h-fit text-white-100 bg-[#1b1a1a]'>
                <div className='text-[#5D5FEF] font-medium flex items-center mx-5 justify-between'>
                    <div>
                        {data.matches[index].date}, {data.matches[index].startTime} - {data.matches[index].endTime}
                    </div>  
                </div>
                <div className='flex justify-between items-center my-5 mx-3'>
                    <div className='w-[150px] justify-items-center'>
                        <div className='rounded-full w-[50px] h-[50px] ml-[45px]'>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="logo" 
                            className='rounded-full object-cover'/>
                        </div>
                        <div className='bg-[#3b3939] mt-3 text-white-100 w-full p-1 shadow-2xl rounded-lg'
                        
                        >
                            {data.allTeamData.map((item1) => {
                                if(item1.key == data.matches[index].player1) {
                                    return item1.name
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
                            {data.allTeamData.map((item1) => {
                                if(item1.key == data.matches[index].player2) {
                                    return item1.name
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center py-3'>
                    <div>
                        {data.setScore && <SetScore />}
                    </div>
                    <button className='px-3 bg-[transparent] border-2 border-[#5D5FEF] text-[#e4a9a9] hover:bg-blue-100 hover:text-[#000] rounded-md py-1 text-[18px] transition-all'
                    onClick={() => {dispatch(tournamentActions.toggleSetScore())}}>
                        Score
                    </button>
                </div>
            </div>
            })}
        </div>
    );
};

export default Results;
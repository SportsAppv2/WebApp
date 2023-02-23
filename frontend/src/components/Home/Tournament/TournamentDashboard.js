import React from 'react';
import {IoIosArrowBack} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiFillSchedule} from 'react-icons/ai'
import {VscOutput} from 'react-icons/vsc'
import {MdGroupWork} from 'react-icons/md'
import {IoSettings} from 'react-icons//io5'
import Participants from './Participants';

const TournamentDashboard = () => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    return (
        <div className='bg-[black] h-screen'>
            <div className='flex justify-between items-center bg-[#26263b] text-white-100 p-3 border-gray-600 border-b-[1px]'>
                <IoIosArrowBack className='text-[28px] text-[white] ml-2 cursor-pointer hover:text-gray-400' 
                onClick={() => {dispatch(tournamentActions.showDashboard())}}/>
                <div className='font-medium text-[24px]'>
                    Inter-NIT Football
                </div>
                <div>
                    general info
                </div>
            </div>
            <div className='flex'>
                <div className='leftbar w-[15%] h-screen border-gray-600 border-r-[1px]'>
                    <div className='text-white-100 text-center flex items-center p-4 border-gray-600 border-2 bg-[#8B8B8D]/30 cursor-pointer'>
                        <BsFillPeopleFill className='text-[28px] mr-5'/>
                        <div className='text-[20px]'>
                            Participants
                        </div>
                    </div>
                    <div className='text-white-100 text-center flex items-center p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer'>
                        <MdGroupWork className='text-[28px] mr-5'/>
                        <div className='text-[20px]'>
                            Format
                        </div>
                    </div>
                    <div className='text-white-100 text-center flex items-center p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer'>
                        <AiFillSchedule className='text-[28px] mr-5'/>
                        <div className='text-[20px]'>
                            Schedule
                        </div>
                    </div>
                    <div className='text-white-100 text-center flex items-center p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer'>
                        <VscOutput className='text-[28px] mr-5'/>
                        <div className='text-[20px]'>
                            Results
                        </div>
                    </div>
                    <div className='text-white-100 text-center flex items-center p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer'>
                        <IoSettings className='text-[28px] mr-5'/>
                        <div className='text-[20px]'>
                            Settings
                        </div>
                    </div>
                </div>
                {data.leftbar.participants && <Participants />}
            </div>
        </div>
    );
};

export default TournamentDashboard;
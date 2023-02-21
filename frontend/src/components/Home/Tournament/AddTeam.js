import React from 'react';
import {IoIosArrowBack} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';
import { CountryDropdown } from 'react-country-region-selector';
import Player from './Player';


const AddTeam = () => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    console.log(data);
    return (
        <div className='w-screen h-screen fixed top-0 left-0 bg-gray-20 flex justify-center items-center'>
            <div className='bg-[black] h-fit w-[400px] text-white-100 p-5 rounded-2xl'>
                <div className='flex items-center mx-5 text-[22px]'>
                    <div onClick={() => {dispatch(tournamentActions.showAddTeam())}}>
                        <IoIosArrowBack className='cursor-pointer hover:text-gray-400' />
                    </div>
                    <div className='ml-24'>
                        Add Team
                    </div>
                </div>
                <div className='p-5'>
                    <div className='mb-5'>
                        <div className='text-gray-600'>
                            Team Name
                        </div>
                        <input type="text" 
                        className='bg-[black] border-gray-600 border-[1px] w-full text-white-100 p-2 outline-none shadow-md'
                        onChange={(e) => {dispatch(tournamentActions.addTeamName(e.target.value))}}/>
                    </div>
                    <div className='mb-5'>
                        <div className='text-gray-600'>
                            Country
                        </div>
                        <CountryDropdown className="bg-[black] border-gray-600 border-[1px] w-full text-white-100 p-2 outline-none shadow-md"
                        value={data.teamData.country} onChange={(e) => {dispatch(tournamentActions.addTeamCountry(e))}}/>
                    </div>
                    <div className='mb-5'>
                        <div className='text-gray-600'>
                            Email
                        </div>
                        <input type="text" 
                        className='bg-[black] border-gray-600 border-[1px] w-full text-white-100 p-2 outline-none shadow-md'
                        onChange={(e) => {dispatch(tournamentActions.addTeamEmail(e.target.value))}}/>
                    </div>
                    <div className='mb-5'>
                        <div className='text-gray-600'>
                            Add players
                        </div>
                        <Player />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTeam;
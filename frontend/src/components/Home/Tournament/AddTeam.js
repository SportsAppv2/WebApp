import React, { useEffect, useRef } from 'react';
import {IoIosArrowBack} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';
import { CountryDropdown } from 'react-country-region-selector';
import Player from './Player';
import { RxCross1 } from 'react-icons/rx';


const AddTeam = () => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    const logo = useRef();
    const filetag = useRef();
    const showLogo = (e) => {
        if(e.target.files[0]) {
            return e.target.files[0].name;
        }
    }
    const onClicking = (e) => {
        logo.current.children[1].click();
    }
    console.log(data);

    useEffect(() => {
        if (!data.teamData.logo == "") {
          filetag.current.classList.remove("hidden");
        } else {
          filetag.current.classList.add("hidden");
          logo.current.children[1].value = "";
        }
      }, [data.teamData.logo]);

    return (
        <div className='w-screen h-screen fixed top-0 left-0 bg-gray-20 flex justify-center items-center'>
            <div className='bg-[black] h-fit max-h-[600px] overflow-y-scroll w-[400px] text-white-100 p-5 rounded-2xl'>
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
                    <div ref={logo}>
                        <div className='text-gray-600 hover:underline cursor-pointer'
                        onClick={(e) => {onClicking(e)}}>
                            Upload team logo
                        </div>
                        <input type="file" 
                        accept='image/*'
                        className='hidden'
                        onChange={(e) => {dispatch(tournamentActions.teamLogoAdded(showLogo(e)))}}/>
                    </div>
                    <div
                    className="files hidden flex w-fit text-white-30 bg-[#151516] rounded-lg mb-5 p-1"
                    ref={filetag}
                    >
                        <div>{data.teamData.logo}</div>
                        <button
                        className="ml-3"
                        onClick={() => {
                            dispatch(tournamentActions.logoDeleted());
                        }}
                        >
                        <RxCross1 className="hover:text-blue-80" />
                        </button>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="bg-[#5D5FEF] hover:bg-blue-100 bg-opacity-50 mt-5 flex ml-[120px] shadow-md text-gray-200 font-medium text-lg px-3 py-1 rounded-xl"
                        >
                            Submit
                        </button>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default AddTeam;
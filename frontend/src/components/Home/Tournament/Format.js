import React from 'react';
import Group from '../../../assets/group.png';
import GroupKnockout from '../../../assets/group+knockout.png';
import Knockout from '../../../assets/knockout.png'
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';
import GroupOnly from './GroupOnly';
import GroupAndKnockout from './GroupAndKnockout';
import KnockoutOnly from './KnockoutOnly';
import Format2 from './Format2';

const Format = () => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    console.log(data);
    return (
        <>
        {data.format2ndpage ? <Format2 /> :
        <div className='bg-[#000000] h-screen w-[100%]'>
            <div className='text-white-100 text-[32px] text-center mt-8 font-medium'>
                Choose a tournament format
            </div>
            <div className='flex text-white-100 mx-[100px] my-16 justify-between'>
                <div className='text-center text-[20px] bg-gray-600 py-5 rounded-xl bg-opacity-20 cursor-pointer'
                onClick={() => {dispatch(tournamentActions.showGroupOnly())}}>
                    <div>
                        Group phase only
                    </div>
                    <img src={Group} alt="img" className='w-[300px] h-[300px]'/>
                </div>
                <div className='text-center text-[20px] bg-gray-600 py-5 rounded-xl bg-opacity-20 cursor-pointer'
                onClick={() => {dispatch(tournamentActions.showGroupAndKnockout())}}>
                    <div>
                        Group + Knockout phase 
                    </div>
                    <img src={GroupKnockout} alt="img" className='w-[300px] h-[300px]'/>
                </div>
                <div className='text-center text-[20px] bg-gray-600 py-5 rounded-xl bg-opacity-20 cursor-pointer'
                onClick={() => {dispatch(tournamentActions.showKnockoutOnly())}}>
                    <div>
                        Knockout phase only
                    </div>
                    <img src={Knockout} alt="img" className='w-[300px] h-[300px]'/>
                </div>
            </div>
            {data.groupOnly && <GroupOnly />}
            {data.groupAndKnockout && <GroupAndKnockout />}
            {data.knockoutOnly && <KnockoutOnly />}
        </div>
    }
    </>
    );
};

export default Format;
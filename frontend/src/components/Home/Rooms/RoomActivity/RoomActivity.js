import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../../../store/homeSlice.js";
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom.js';

const RoomActivity = () => {
    const data = useSelector((state) => state.home);
    const join = useRef();
    const create = useRef();
    const dispatch = useDispatch("")
    const toggleZero = () => {
        dispatch(homeActions.pageChanged(0));
    }

    useEffect(() => {
        if(data.pageNumber==1){
            join.current.classList.remove("hidden");
        }else if(data.pageNumber==2){
            join.current.classList.add("hidden");
            create.current.classList.remove("hidden");
        }    
    }, [data.pageNumber])

    console.log(data);

    return (
        <div className='w-screen h-screen fixed top-0 left-0 z-20'>
            <div className='w-screen h-screen fixed top-0 left-0 bg-gray-20' onClick={() => {toggleZero()}}>

            </div>
            <div className='h-fit w-[580px] bg-[#000000] m-auto mt-[80px] rounded-3xl relative p-2'>
                <div ref={join} className='hidden'>
                    <JoinRoom />
                </div>
                <div ref={create} className='hidden'>
                    <CreateRoom />
                </div>
            </div>
        </div>
    );
};

export default RoomActivity;
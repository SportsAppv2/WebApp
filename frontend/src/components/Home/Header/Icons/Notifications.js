import React, { useRef } from 'react';
import {AiOutlineRight} from 'react-icons/ai'
import LikedPost from './LikedPost';
import CommentedPost from './CommentedPost';
import { useDispatch, useSelector } from 'react-redux';
import { headerActions } from '../../../../store/headerSlice';
import FollowRequests from './FollowRequests';
import RoomRequests from './RoomRequests';

const Notifications = () => {
    const data = useSelector((state) => state.header);
    const dispatch = useDispatch();
    const notif = useRef("");
    if(data.showFollowRequests==false && notif.current){
        notif.current.classList.remove("hidden");
    }
    return (
        <div>
            <div className='absolute top-[100px] right-[100px] bg-gray-600 bg-opacity-50 text-white-100 w-[350px] h-[500px] overflow-y-scroll p-5'
            ref={notif}>
            <div className='flex items-center p-2 px-5 shadow-3xl bg-blue-60 bg-opacity-30 hover:bg-blue-60 hover:bg-opacity-50 rounded-xl justify-between cursor-pointer'
            onClick={() => {dispatch(headerActions.toggleFollowRequests())}}>
                <div>
                    Follow requests
                </div>
                <AiOutlineRight />
            </div>
            <div className='flex items-center mt-4 p-2 px-5 shadow-3xl bg-blue-60 bg-opacity-30 hover:bg-blue-60 hover:bg-opacity-50 rounded-xl justify-between cursor-pointer'
            onClick={() => {dispatch(headerActions.toggleRoomRequests())}}>
                <div>
                    Room requests
                </div>
                <AiOutlineRight />
            </div>
            <LikedPost />
            <CommentedPost />
            </div>
            {data.showFollowRequests && notif.current ? <>
            {notif.current.classList.add("hidden")} <FollowRequests /> </>: ""}
            {data.showRoomRequests && notif.current ? <>
            {notif.current.classList.add("hidden")} <RoomRequests /> </>: ""}
        </div>
        
    );
};

export default Notifications;
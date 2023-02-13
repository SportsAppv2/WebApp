import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createroomActions } from '../../../../store/createroomSlice';
import Header from './Header';
import SearchItem from '../../../setup/SearchItem';

const CreateRoom = () => {
    const data = useSelector((state) => state.createroom.info);
    const dispatch = useDispatch();
    const storeData = (roomName, privacy, bio, tags) => {
        dispatch(createroomActions.infoAdded({roomName, privacy, bio, tags}));
    }
    const tagStore = (event) => {
        storeData(data.roomName, data.privacy, data.bio, [
            ...data.tags,
            { id: data.tags.length, tagName: event.target.value },
          ]);
        event.target.value = "none";
    }
    console.log(data);
    return (
        <div>
            <Header mainHeader="Create a room" subHeader="A room is a place where you can engage in discussions, meetings and conversations with people having similar interests and hang out with them."/>
            <div className='p-4 mx-6 text-white-100'>
                <div className='text-center'>
                    <input type="text" placeholder='Name of the room' 
                    className='bg-[#000000] border-gray-600 border-[1px] p-2 w-full'
                    onChange={(e) => storeData(e.target.value, data.privacy, data.bio, data.tags)}
                    />
                </div>
                <div className='flex my-8 items-cen text-[18px] p-4'>
                    <div className='mr-5 text-gray-600'>
                        Privacy :
                    </div>
                    <input type="radio" name='privacyInput'className='mx-3' value="public"
                    onChange={(e) => storeData(data.roomName, e.target.value, data.bio, data.tags)}/>
                    <label className='mr-11'>Public</label>
                    <input type="radio" name='privacyInput' className='mx-3' value="private"
                    onChange={(e) => storeData(data.roomName, e.target.value, data.bio, data.tags)}/>
                    <label>Private</label>
                </div>
                <div>
                    <textarea placeholder='Tell us a bit about the room'
                    className='bg-[#000000] border-gray-600 border-[1px] p-2 w-full h-[100px]'
                    onChange={(e) => storeData(data.roomName, data.privacy, e.target.value, data.tags)}
                    ></textarea>
                </div>
                <div className='m-5'>
                    <select name="roomCategory" id="" 
                    onChange={(e) => {tagStore(e)}}
                    className='bg-[#000000] p-4 w-full border-gray-600 border-[1px] rounded-3xl'>
                        <option value="none">Select room category</option>
                        <option value="football">Football</option>
                        <option value="cricket">Cricket</option>
                        <option value="basketball">Basketball</option>
                        <option value="hockey">Hockey</option>
                        <option value="lawntennis">Lawn Tennis</option>
                        <option value="swimming">Swimming</option>
                    </select>
                </div>
                <div className="my-1 flex w-full flex-wrap">
                    {data.tags.map((item, index) => (
                        <SearchItem cut="createroom" name={item.tagName} tagId={item.id} key={index} />
                    ))}
                </div>
                <div className='flex justify-center my-5'>
                    <button className='bg-white-100 font-semibold text-[#000000] text-[18px] rounded-2xl p-2 hover:bg-gray-400'
                    
                    >
                        Create room
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateRoom;
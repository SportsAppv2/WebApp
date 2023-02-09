import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileActions } from '../../store/userProfileSlice';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {BsTwitter, BsFacebook, BsYoutube, BsInstagram} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa';
import {RxCross1} from 'react-icons/rx';
import { editProfileActions } from '../../store/editProfileSlice';
import DiscardChanges from './DiscardChanges';

const EditProfile = () => {
    const data = useSelector((state) => state.editProfile);
    const dispatch = useDispatch();
    const toggle = () => {
        if(isEqual(data.userOriginal, data.editedData)){
            dispatch(userProfileActions.toggleEditProfile());
            dispatch(editProfileActions.revertToInitial());
        }else{
            dispatch(editProfileActions.toggleDiscardChanges());
        }      
        
    }
    function isEqual(obj1, obj2) {
        for (const key in obj1) {
            if (obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
                return false;
            }
        }
        for (const key in obj2) {
            if (!obj1.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    
    
    
    console.log(data);
    return (
        <div className='h-screen w-screen fixed top-0 left-0'>
            <div className='h-screen w-screen fixed top-0 left-0 bg-gray-20'>

            </div>
            <div className='h-fit w-[580px] bg-[#000000] text-white-100  m-auto mt-[80px] rounded-3xl relative p-5'>
                <div className='text-center text-[24px] font-semibold'>
                    Edit Profile
                </div>
                <div className='absolute top-[20px] right-[20px] text-[22px] text-[#5D5FEF] hover:text-blue-60 cursor-pointer'
                onClick={() => {toggle()}}
                >
                    <RxCross1 />
                </div>
                {data.showDiscardChanges && <DiscardChanges />}
                <div className='overflow-y-scroll mt-5'>
                    <div className='mt-5 mx-5 h-[500px]'>
                        <div className='flex justify-between my-2'>
                            <div className='w-[45%]'>
                                <div className='text-gray-600'>
                                    First Name
                                </div>
                                <input type="text" 
                                className='bg-[#000000] border-gray-600 border-[1px] p-2 w-full'
                                onChange={(e)=> {
                                    dispatch(editProfileActions.fnameAdded(e.target.value));
                                }}
                                />
                            </div>
                            <div className='w-[45%]'>
                                <div className='text-gray-600'>
                                    Last Name
                                </div>
                                <input type="text" 
                                className='bg-[#000000] border-gray-600 border-[1px] p-2 w-full'
                                onChange={(e)=> {
                                    dispatch(editProfileActions.lnameAdded(e.target.value));
                                }}
                                />
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='text-gray-600'>
                                Bio
                            </div>
                            <textarea
                            className='bg-[#000000] border-gray-600 border-[1px] p-2 w-full h-[100px]'
                            onChange={(e)=> {
                                dispatch(editProfileActions.bioAdded(e.target.value));
                            }}
                            />
                        </div>                    
                        <div className='my-2'>
                            <div className='text-gray-600'>
                                Country
                            </div>
                            <CountryDropdown 
                            value={data.editedData.country}
                            onChange={(e)=> {
                                dispatch(editProfileActions.countryAdded(e));
                            }}
                            className='bg-[#000000] w-full border-gray-600 border-[1px] p-2' />
                        </div>
                        <div className='my-2'>
                            <div className='text-gray-600'>
                                Region
                            </div>
                            <RegionDropdown 
                            country={data.editedData.country}
                            value={data.editedData.region}
                            onChange={(e) => {
                                dispatch(editProfileActions.regionAdded(e))
                            }}
                            className='bg-[#000000] w-full border-gray-600 border-[1px] p-2' />
                        </div>
                        <div className='my-2'>
                            <div className='text-gray-600'>
                                Media Handles
                            </div>
                            <div className='flex items-center my-2'>
                                <BsInstagram className='text-[24px] mr-5'/>
                                <input type="text" 
                                placeholder='Instagram username'
                                className='bg-[#000000] border-gray-600 border-[1px] p-2 w-full'
                                onChange={(e)=> {
                                    dispatch(editProfileActions.instaAdded(e.target.value));
                                }}
                                />
                            </div>
                            <div className='flex items-center my-2'>
                                <BsYoutube className='text-[24px] mr-5'/>
                                <input type="text" 
                                placeholder='Youtube username'
                                className='bg-[#000000] border-gray-600 border-[1px] p-2 w-full'
                                onChange={(e)=> {
                                    dispatch(editProfileActions.youtubeAdded(e.target.value));
                                }}
                                />
                            </div>
                            <div className='flex items-center my-2'>
                                <FaTiktok className='text-[24px] mr-5'/>
                                <input type="text" 
                                placeholder='Tiktok username'
                                className='bg-[#000000] border-gray-600 border-[1px] p-2 w-full'
                                onChange={(e)=> {
                                    dispatch(editProfileActions.tiktokAdded(e.target.value));
                                }}
                                />
                            </div>
                            <div className='flex items-center my-2'>
                                <BsFacebook className='text-[24px] mr-5'/>
                                <input type="text" 
                                placeholder='Facebook username'
                                className='bg-[#000000] border-gray-600 border-[1px] p-2 w-full'
                                onChange={(e)=> {
                                    dispatch(editProfileActions.facebookAdded(e.target.value));
                                }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-5'>
                    <button className='bg-white-100 font-semibold text-[18px] text-[#000000] rounded-2xl p-3 px-5 hover:bg-gray-400'>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
import React from 'react';
import Header from '../../components/Home/Header/Header';
import LeftBar from "../../components/Profile/LeftBar.js"
import RightBar  from '../../components/Profile/RightBar.js';

const Profile = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <div className='flex flex-grow h-full bg-[#000000] overflow-y-scroll'>
                <LeftBar />
                <div className='h-full w-[1px] bg-gray-600'></div>
                <div className='body w-[70%] p-4'>
                    <div className='content'>
                        <div className=''>
                            <div className='cover h-[200px]'>
                                <img src="https://i.pinimg.com/originals/41/95/a7/4195a7a378a0677d4952320b056da6ee.jpg" 
                                alt="cover-pic" 
                                className='h-[100%] w-[100%] object-cover'                            
                                />
                            </div>
                            <div className='dp rounded-full h-[150px] w-[150px] absolute top-[230px] left-[230px]'>
                                <img src="https://www.whoa.in/download/cristiano-ronaldo-back-view-wallpaper" 
                                alt="profile-pic" 
                                className='h-[100%] w-[100%] object-cover rounded-full'
                                />
                            </div>
                            <div className='flex text-white-100 font-bold text-[20px] mt-[120px] mx-5'>
                                <div className='p-2'>
                                    Baibhav Saikia
                                </div>
                                <div className='p-2 text-gray-600'>
                                    @hawk123
                                </div>
                            </div>
                            <div className='text-white-100 text-[18px] mx-5 p-2'>
                                Hey, A football fan here!!! CR7 is ❤️ | NIT Silchar '23' | Following Real Madrid since the age of 10.
                            </div>
                            <div className='follow flex absolute top-[350px] right-[350px] text-[18px]'>
                                <div className='flex'>
                                    <div className='text-white-100 mx-2'>
                                        826
                                    </div>
                                    <div className='text-gray-600 mr-2'>
                                        Followers
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='text-white-100 ml-2'>
                                        92
                                    </div>
                                    <div className='text-gray-600 mx-2'>
                                        Following
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' mt-8'>
                            <div className='bar flex w-[60%] h-[50px] bg-[#8b8b8d33] rounded-[100px]'>
                            </div>
                        </div>
                                                
                    </div>
                </div>
                <div className='h-full w-[1px] bg-gray-600'></div>
                <RightBar />
            </div>
        </div>
    );
};

export default Profile;
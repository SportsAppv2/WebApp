import React from 'react';
import group from '../../../assets/landing/1.jpg'

const Header = () => {
    return (
        <div className='text-center flex items-center mx-[100px] py-[50px]'>
            <div className=' big text-[64px] w-[700px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text leading-[110px] italic'>
                Discover Engaging Discussions & Conversations
            </div> 
            <img src={group} alt="img" className='justify-center h-[600px] w-[600px] ml-14 rounded-xl'/>            
        </div>
    );
};

export default Header;
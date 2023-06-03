import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { userProfileActions } from '../../store/userProfileSlice';

const Follow = () => {
    const dispatch = useDispatch((state) => state.userprofile);
    const selector = useRef();
    const activate = (event) => {
        const color = "bg-[#5D5FEF]";
        const elems = selector.current.getElementsByClassName("status");
        Array.from(elems).forEach((elem) => {
        elem.classList.remove(color);
        });
        console.log(event.target.parentElement);
        event.target.parentElement.children[1].classList.add(color);
    };
    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center'>            
            <div className='w-[400px] h-fit bg-[black] text-white-100 p-5 rounded-xl'>
                <div className='flex text-gray-600 text-[20px] justify-center' ref={selector}>
                    <div className='mr-8 cursor-pointer' onClick={(e) => {activate(e)}}>
                        <div>
                            20 Followers
                        </div>
                        <div className='status w-full h-[2px] bg-[#5D5FEF]'></div>
                    </div>
                    <div className='cursor-pointer' onClick={(e) => {activate(e)}}>
                        <div> 
                            112 Following
                        </div>
                        <div className='status w-full h-[2px]'></div>
                    </div>
                </div>
                <div className='mt-5 ml-5 text-[16px] text-gray-400'>
                    <div className='flex items-center'>
                        <div className='rounded-full h-[50px] w-[50px] mr-3'>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="dp" 
                            className='rounded-full object-cover'/>
                        </div>
                        <div>
                            <div>
                                Zidane
                            </div>
                            <div>
                                @rmazid
                            </div>
                        </div>
                        <button className='bg-[transparent] border-2 border-[#b43f3f] text-[#e4a9a9] hover:bg-[#a74d4d] hover:text-[#000] rounded-md py-1 px-5 text-[18px] transition-all ml-20'>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-screen h-screen fixed top-0 left-0 -z-10 bg-gray-20'
            onClick={() => {dispatch(userProfileActions.openShowFollow())}}></div>
        </div>
    );
};

export default Follow;
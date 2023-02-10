import React from 'react';
import { useDispatch } from 'react-redux';
import { editProfileActions } from '../../store/editProfileSlice';
import { userProfileActions } from '../../store/userProfileSlice';

const DiscardChanges = () => {
    const dispatch = useDispatch();
    const yes = () => {
        dispatch(editProfileActions.toggleDiscardChanges());
        dispatch(userProfileActions.toggleEditProfile());
        dispatch(editProfileActions.revertToInitial());
    }
    const no = () => {
        dispatch(editProfileActions.toggleDiscardChanges());
    }
    return (
        <div className='h-screen w-screen fixed bg-gray-20 top-0 left-0 flex justify-center items-center'>
            <div className='bg-[#000000] border-gray-600 border-2 rounded-3xl text-white-100 h-fit w-[400px] p-6'>
                <div className='text-[18px] mb-5 text-center'>
                    Are you sure you want to discard changes?
                </div>  
                <div className='flex items-center justify-between mx-[20%] '>
                    <button className='bg-[#5D5FEF] hover:bg-blue-100 p-3 px-5 font-semibold bg-opacity-50 rounded-2xl'
                    onClick={yes}
                    >
                        Yes
                    </button>
                    <button className='bg-[#5D5FEF] hover:bg-blue-100 p-3 px-5 font-semibold bg-opacity-50 rounded-2xl'
                    onClick={no}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiscardChanges;
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { headerActions } from '../../../../store/headerSlice';

const Menu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goToFeedback = () => {
        dispatch(headerActions.toggleMenu());
        navigate("/feedback");
    }
    return (
        <div className='absolute top-[80px] right-[20px] max-h-[450px] h-fit font-medium bg-[#333030] z-[999] text-white-100 w-[250px] overflow-y-scroll p-3'>
            <div className='bg-gray-600 bg-opacity-50 hover:bg-opacity-40 p-3 rounded-lg cursor-pointer shadow-3xl'
            onClick={() => {goToFeedback()}}>
                Feedback
            </div>
        </div>
    );
};

export default Menu;
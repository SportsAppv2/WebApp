import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard2 = (props) => {
    const navigate = useNavigate();
    //  path = "'" + path + "'";
    return (
        <div className='mx-11'>
            <div className='flex p-6'>
                <div className='m-2 mr-5 w-[600px]'>
                    <a className='text-white-100 font-medium text-[22px] hover:underline cursor-pointer'
                     href={props.url} target="-blank" rel="noreferrer">
                        {props.title}
                    </a>
                    <div className='text-gray-400 text-[18px] my-3'>
                        {props.description}
                    </div>
                    <div className='flex justify-between text-gray-600'>
                        <div>
                            {props.time}
                        </div>
                        <div>
                            {props.author}
                        </div>
                    </div>
                </div>
                <div className='w-[400px] h-[200px] relative'>
                    <img src={props.image} alt="img" 
                    className='min-w-[100%] min-h-[100%] max-h-[100%] max-w-[100%]'/>
                </div>
            </div>
            <div className='w-full h-[1px] bg-gray-600'></div>
        </div>
    );
};

export default NewsCard2;
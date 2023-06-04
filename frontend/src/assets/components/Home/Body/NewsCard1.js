import React from 'react';

const NewsCard1 = (props) => {
    return (
        <div className='w-[500px] relative'>
            <img className='min-w-[100%] min-h-[100%] max-h-[100%] max-w-[100%]' src={props.img} alt="img" />
            <a className='text-white-100 text-[18px] absolute left-0 bottom-0 p-3 bg-gray-600 bg-opacity-70 hover:underline cursor-pointer font-medium'
            href={props.url} target="-blank" rel="noreferrer">
                {props.title}
            </a>
        </div>
    );
};

export default NewsCard1;
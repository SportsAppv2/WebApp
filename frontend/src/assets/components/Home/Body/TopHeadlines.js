import React from 'react';
import { useSelector } from 'react-redux';

const TopHeadlines = () => {
    const data = useSelector((state) => state.home);
    console.log("TH", data.news);
    return (
        <div className='bg-gray-400  shadow-2xl w-[500px] p-5 overflow-y-scroll'>
            <div className='text-center text-[20px] font-medium'>
                Top Headlines
            </div>
            <div className='mt-5 pl-5'>
                {Array.from(data.news).slice(0,5).map((elem) => {
                    {console.log(elem.title)}
                    return <a className='my-2 cursor-pointer hover:underline' href={elem.url} target="-blank" rel="noreferrer">
                        {elem.title}
                        <br /><br />                           
                    </a>
                })}
                
            </div>
            
        </div>
    );
};

export default TopHeadlines;
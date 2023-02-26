import React from 'react';
import { useSelector } from 'react-redux';

const SingleParticipant = (props) => {
    const data = useSelector((state) => state.tournament);
    console.log(props.val);
    return (
        <div className='bg-gray-600 w-[300px] h-fit text-white-100 p-3 rounded-lg'>
            XXX
            {/* {data.allTeamData.props.ind.name} */}
        </div>
    );
};

export default SingleParticipant;
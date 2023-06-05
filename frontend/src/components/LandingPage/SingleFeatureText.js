import React from 'react';

const SingleFeatureText = (props) => {
    return (
        <div className="text-gray-300 pl-14">
            <div className="font-bold text-[36px] py-11 text-[#A5A6F6]">
                {props.heading}
            </div>
            <div className="text-[20px]">
                {props.text}
            </div>
        </div>
    );
};

export default SingleFeatureText;
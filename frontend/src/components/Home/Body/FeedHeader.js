import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { homeActions } from '../../../store/homeSlice';
import {MdExpandMore} from 'react-icons/md';

const FeedHeader = (props) => {
    const dispatch = useDispatch();
    const selector = useRef();
    const activate = (event, val) => {
        const bgColor = "bg-blue-80";
        const elems = selector.current.getElementsByClassName("status");
        Array.from(elems).forEach((elem) => {
          elem.classList.remove(bgColor);
        });
        event.target.parentElement.children[1].classList.add(bgColor);
        dispatch(homeActions.feedTypeChanged(val));
    };
    return (
        <div className={"w-fit z-10 m-auto mt-5 " + (props.sticky=="true" ? "sticky top-2" : "")}>
            <div className="flex items-center bg-[#2e2e2e] rounded-[100px]" ref={selector}>
                <div
                    className="min-w-[80px] mx-3 ml-4 hover:cursor-pointer"
                    onClick={(event) => activate(event, "Feed")}
                >
                    <div className="text-white-50 text-[20px] text-center">Feed</div>
                    <div className="status bg-blue-80 h-[3px]"></div>
                </div>
                <div
                    className="min-w-[80px] mx-3 hover:cursor-pointer"
                    onClick={(event) => activate(event, "Trending")}
                >
                    <div className="text-white-50 text-[20px] text-center">Trending</div>
                    <div className="status h-[3px]"></div>
                </div>
                <div
                    className="top min-w-[80px] mx-3 hover:cursor-pointer"
                    onClick={(event) => activate(event, "Football")}
                >
                    <div className="text-white-50 text-[20px] text-center">Football</div>
                    <div className="status h-[3px]"></div>
                </div>
                <div
                    className="top min-w-[80px] mx-3 hover:cursor-pointer"
                    onClick={(event) => activate(event, "ManUnited")}
                >
                    <div className="text-white-50 text-[20px] text-center">ManUnited</div>
                    <div className="status h-[3px]"></div>
                </div>
                <div
                    className="top  mx-3 mr-5 hover:cursor-pointer"
                    onClick={(event) => activate(event, "videos")}
                >
                    <div className="text-white-50 text-[20px] text-center">
                        <MdExpandMore />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FeedHeader;
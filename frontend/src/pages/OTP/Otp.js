import React, { useRef, useEffect, useState} from 'react';
import logo from "../../assets/iconLogo.svg";
import './Otp.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { otpActions } from '../../store/otpSlice';


const Otp = () => {
    const data = useSelector((state) => state.otp);
    console.log(data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(5);
    useEffect(() => {
        const interval = setInterval(() => {
          dispatch(otpActions.timeDecay());
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
      
          if (seconds === 0) {
            return clearInterval(interval);
          }
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
    }, [seconds]);
    useEffect(() => {
        if (data.authorized) {
          console.log("Should Route to a new page now");
          navigate("/setup");
        }
    }, [data.authorized]);
    const otpboxes = useRef('');
    const removeClassname = (elem) => {
        Array.from(elem).forEach((div) => {
            div.classList.remove('activeInput');
         })
    }
    const finalOtp = (elem) => {
        let finalotp = "";
        Array.from(elem).forEach((div) => {
            finalotp=finalotp+div.value;
        })
        return finalotp;
    }
    
    const  clickEve = (event, next) => {
        let curr = event.target;        
        if(curr.value.length){
            otpboxes.current.children[next].disabled=false;
            otpboxes.current.children[next].focus();
            removeClassname(otpboxes.current.children);
            otpboxes.current.children[next].classList.add('activeInput');
            otpboxes.current.children[next-1].disabled=true;
        }  
    }
    const backward = (event, prev) => {
        let curr=event.target;
        if(!curr.value.length && event.keyCode=='8'){
            otpboxes.current.children[prev].disabled=false;
            removeClassname(otpboxes.current.children);
            otpboxes.current.children[prev].classList.add('activeInput');
            otpboxes.current.children[prev].focus();
            otpboxes.current.children[prev].value='';
            otpboxes.current.children[prev+1].disabled=true;
        }
    }
    return (
        <div className="bg-[#1A1C20] h-screen flex items-center">
            <div className="bg-[#000000] w-[700px] h-[400px] rounded-lg drop-shadow-xl m-auto text-white-100 p-6">
                <div className='mx-4 md:mx-14'>
                    <div className="flex">
                        <div className="logoIcon h-auto mr-2 ml-auto">
                            <img
                                src={logo}
                                className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
                                alt="Logo"
                            />
                        </div>
                        <div className="logoText h-auto ml-0 mr-auto text-[24px] md:text-[22px]">
                            Sports Hub
                        </div>
                    </div>
                    <div className='text mt-9 text-gray-300 font-medium leading-tight text-[22px]'>
                        Please enter the code sent to your email
                    </div>
                    <div className='digits flex text-[36px] mt-6' ref={otpboxes}>
                        <input type="text" 
                        autoFocus
                        maxLength={1} 
                        className="bg-[#000000] w-16 h-17 p-4 border-2 border-gray-600 ml-6"
                        onKeyUp={(e) => {clickEve(e,1)}}                        
                        />
                        <input type="text" 
                        maxLength={1} 
                        disabled
                        className="bg-[#000000] w-16 h-17 p-4 border-2 border-gray-600 ml-6"
                        onKeyUp={(e) => {clickEve(e,2)}}
                        onKeyDown={(e) => {backward(e,0)}}
                        />
                        <input type="text" 
                        maxLength={1} 
                        disabled
                        className="bg-[#000000] w-16 h-17 p-4 border-2 border-gray-600 ml-6"
                        onKeyUp={(e) => {clickEve(e,3)}}
                        onKeyDown={(e) => {backward(e,1)}} 
                        />
                        <input type="text" 
                        maxLength={1} 
                        disabled
                        className="bg-[#000000] w-16 h-17 p-4 border-2 border-gray-600 ml-6"
                        onKeyUp={(e) => {clickEve(e,4)}} 
                        onKeyDown={(e) => {backward(e,2)}} 
                        />
                        <input type="text" 
                        maxLength={1} 
                        disabled
                        className="bg-[#000000] w-16 h-17 p-4 border-2 border-gray-600 ml-6"
                        onKeyUp={(e) => {clickEve(e,5)}} 
                        onKeyDown={(e) => {backward(e,3)}}
                        />
                        <input type="text" 
                        maxLength={1} 
                        disabled
                        className="bg-[#000000] w-16 h-17 p-4 border-2 border-gray-600 ml-6"
                        onKeyDown={(e) => {backward(e,4)}}
                        />
                    </div>
                    <div className='resend text-[16px] font-medium text-[#5D5FEF] mt-6 text-right'>
                        {(seconds > 0 ) ? <div>Resend code in {seconds} secs...</div> : 
                        <div 
                        onClick={()=>{setSeconds(5); dispatch(otpActions.timeReset());}}
                        className='cursor-pointer hover:underline'>
                                Resend code                                
                        </div>}                        
                    </div>
                    <div className='btn pt-6 text-center'>
                        <button 
                        className='w-64 bg-white-100 hover:bg-gray-400 text-[#000000] font-medium text-xl pb-1 rounded-2xl'
                        onClick={(e) => dispatch(otpActions.otpAdded(finalOtp(otpboxes.current.children)))}>
                            Confirm
                        </button>
                    </div>
                </div>                
            </div>            
        </div>
    );
};

export default Otp;
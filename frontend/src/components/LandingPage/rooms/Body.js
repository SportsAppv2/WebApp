import React, { useEffect, useRef } from 'react';
import {RxDoubleArrowRight, RxDoubleArrowLeft} from 'react-icons/rx'
import image from '../../../assets/landing/1.jpg'

const Body = () => {
    const componentRef1 = useRef(null);
    const componentRef2 = useRef(null);
    const componentRef3 = useRef(null);
    const componentRef4 = useRef(null);

    useEffect(() => {
        const componentObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-left');
            }
            });
        },
        { threshold: 0.2 } // Adjust the threshold as needed
        );

        if (componentRef1.current) {
        componentObserver.observe(componentRef1.current);
        }
        if (componentRef2.current) {
            componentObserver.observe(componentRef2.current);
        }
        if (componentRef3.current) {
            componentObserver.observe(componentRef3.current);
        }
        if (componentRef4.current) {
            componentObserver.observe(componentRef4.current);
        }

        return () => {
        if (componentRef1.current) {
            componentObserver.unobserve(componentRef1.current);
        }
        if (componentRef2.current) {
            componentObserver.unobserve(componentRef2.current);
        }
        if (componentRef3.current) {
            componentObserver.unobserve(componentRef3.current);
        }
        if (componentRef4.current) {
            componentObserver.unobserve(componentRef4.current);
        }
        };
    }, []);

    return (
        <div className='mx-[100px] pb-[80px]'>
            <div className='flex items-center my-[80px] h-[200px] bg-[#0A0A1E] p-5 rounded-3xl'>
                <div className='big text-[32px] w-[500px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Join Vibrant Communities
                </div>
                <div className='flex items-center' ref={componentRef1}>
                    <RxDoubleArrowRight className='text-[40px] text-gray-300 ml-[80px]'/>
                    <div className='text-gray-300 w-[500px] text-[20px] mx-[80px]'>
                        Connect with fellow sports enthusiasts in dynamic rooms. Engage in lively discussions, share content, ask questions, and even create polls. 
                    </div>
                </div>                
            </div>
            <div className='flex items-center my-[80px] h-[200px] bg-[#0A0A1E] p-5 rounded-3xl'>
                <div className='big w-[500px] text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Verified Rooms
                </div> 
                <div className='flex items-center' ref={componentRef2}>
                    <RxDoubleArrowRight className='text-[40px] text-gray-300 ml-[80px]'/>
                    <div className='text-gray-300 w-[500px] text-[20px] mx-[80px]'>
                        Curated spaces which bear the coveted verification badge, ensuring reliable and top-quality discussions. 
                    </div>
                </div>               
            </div>
            <div className='flex items-center my-[80px] h-[200px] bg-[#0A0A1E] p-5 rounded-3xl'>
                <div className='big w-[500px] text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    User-Created Rooms
                </div>
                <div className='flex items-center' ref={componentRef3}>
                    <RxDoubleArrowRight className='text-[40px] text-gray-300 ml-[80px]'/>
                    <div className='text-gray-300 w-[500px] text-[20px] mx-[80px]'>
                        Create your own room! It provides a platform for users to initiate discussions centered around niche interests, local sports events, or specific teams/athletes.
                    </div>
                </div>                
            </div>
            <div className='flex items-center my-[80px] h-[200px] bg-[#0A0A1E] p-5 rounded-3xl'>
                <div className='big w-[500px] text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Public or Private
                </div>
                <div className='flex items-center' ref={componentRef4}>
                    <RxDoubleArrowRight className='text-[40px] text-gray-300 ml-[80px]'/>
                    <div className='text-gray-300 w-[500px] text-[20px] mx-[80px]'>
                    Choose your preferred level of privacy. Enjoy a personalized experience tailored to your preferences.
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Body;
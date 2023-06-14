import React, { useEffect, useRef } from 'react';

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
        <div className='mx-[130px] py-[100px]'>
            <div className='text-center flex flex-col my-[80px]' ref={componentRef1}>
                <div className='big text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Personalized News Feed
                </div>
                <div className='text-gray-300 mt-[20px] text-[26px]'>
                    Tailored to your interests, choose the sports, teams, and athletes you love to receive curated content that keeps you up to date.
                </div>
            </div>
            <div className='flex justify-center'>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
            </div>            
            <div className='text-center flex flex-col my-[80px]' ref={componentRef2}>
                <div className='big text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Real-Time Scores and Standings
                </div>
                <div className='text-gray-300 mt-[20px] text-[26px]'>
                    Follow your favorite teams and leagues with live scores, standings, and fixtures.
                </div>
            </div>
            <div className='flex justify-center'>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
            </div> 
            <div className='text-center flex flex-col my-[80px]' ref={componentRef3}>
                <div className='big text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Powerful Search
                </div>
                <div className='text-gray-300 mt-[20px] text-[26px]'>
                    Find specific articles, updates, or highlights with ease using our intuitive search feature.
                </div>
            </div>
            <div className='flex justify-center'>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
            </div> 
            <div className='text-center flex flex-col my-[80px]' ref={componentRef4}>
                <div className='big text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Memes and Engaging Posts
                </div>
                <div className='text-gray-300 mt-[20px] text-[26px]'>
                    Discover a vibrant community of sports fans and enjoy entertaining memes and user-generated content.
                </div>
            </div>
        </div>
    );
};

export default Body;
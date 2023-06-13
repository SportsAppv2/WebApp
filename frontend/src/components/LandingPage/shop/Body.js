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
                    Extensive Marketplace
                </div>
                <div className='text-gray-300 mt-[20px] text-[26px]'>
                    Discover a wide range of new and used sports equipment, from gear to apparel, for all your sporting needs.
                </div>
            </div>
            <div className='flex justify-center'>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
            </div>            
            <div className='text-center flex flex-col my-[80px]' ref={componentRef2}>
                <div className='big text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Authentic Merchandise
                </div>
                <div className='text-gray-300 mt-[20px] text-[26px]'>
                    Shop for official team, club, and player merchandise, proudly supporting your favorite sports entities.
                </div>
            </div>
            <div className='flex justify-center'>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
            </div> 
            <div className='text-center flex flex-col my-[80px]' ref={componentRef3}>
                <div className='big text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Hassle-Free Selling
                </div>
                <div className='text-gray-300 mt-[20px] text-[26px]'>
                    Easily list your own sports goods for sale, reaching a dedicated community of sports enthusiasts.
                </div>
            </div>
            <div className='flex justify-center'>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
                <div class="h-1 w-1 rounded-full bg-landing-secondary mx-1"></div>
            </div> 
            <div className='text-center flex flex-col my-[80px]' ref={componentRef4}>
                <div className='big text-[32px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text'>
                    Secure Transactions
                </div>
                <div className='text-gray-300 mt-[20px] text-[26px]'>
                    Enjoy a safe and secure buying and selling experience with trusted payment and shipping options.
                </div>
            </div>
        </div>
    );
};

export default Body;
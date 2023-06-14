import React from 'react';
import Main from '../../components/LandingPage/rooms/Main.js';
import Body from '../../components/LandingPage/rooms/Body.js';
import Footer from '../../components/LandingPage/footer.js';
import Header from '../../components/LandingPage/header.js';
import image from '../../assets/landing/1.jpg'
import MoreAboutUs from '../../components/LandingPage/moreAboutUs.js';


const Rooms = () => {
    return (
        <div className='bg-landing-primary min-h-screen'>
            <img src={image} alt="" className='w-full h-screen opacity-10'/>
            <div className='absolute inset-0'>
                <Header />
                <Main />
            </div>
            <Body />
            <MoreAboutUs />
            <Footer />
        </div>
    );
};

export default Rooms;
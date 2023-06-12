import React from 'react';
import Main from '../../components/LandingPage/rooms/Main.js';
import Body from '../../components/LandingPage/rooms/Body.js';
import More from '../../components/LandingPage/rooms/More.js';
import Footer from '../../components/LandingPage/footer.js';
import Header from '../../components/LandingPage/header.js';


const Rooms = () => {
    return (
        <div className='bg-landing-primary min-h-screen'>
            <Header />
            <Main />
            <Body />
            <More />
            <Footer />
        </div>
    );
};

export default Rooms;
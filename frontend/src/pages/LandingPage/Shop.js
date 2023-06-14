import React from 'react';
import image from '../../assets/landing/5.jpg'
import Header from '../../components/LandingPage/header.js';
import Main from '../../components/LandingPage/shop/Main.js';
import Body from '../../components/LandingPage/shop/Body.js';
import MoreAboutUs from '../../components/LandingPage/moreAboutUs.js';
import Footer from '../../components/LandingPage/footer.js';

const Shop = () => {
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

export default Shop;
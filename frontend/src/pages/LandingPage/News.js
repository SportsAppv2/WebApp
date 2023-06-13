import React from 'react';
import Header from '../../components/LandingPage/header';
import Main from '../../components/LandingPage/news/Main';
import image from '../../assets/landing/3.jpg'
import Body from '../../components/LandingPage/news/Body';
import MoreAboutUs from '../../components/LandingPage/moreAboutUs';
import Footer from '../../components/LandingPage/footer';

const News = () => {
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

export default News;
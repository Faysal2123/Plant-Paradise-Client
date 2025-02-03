import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import WhyChooseUs from './WhyChooseUs';
import Newsletter from './Newsletter';
import CustomerReviews from './CustomerReviews';
import Plants from './Plants';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Plants></Plants>
            <Slider></Slider>
            <WhyChooseUs></WhyChooseUs>
            <CustomerReviews></CustomerReviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
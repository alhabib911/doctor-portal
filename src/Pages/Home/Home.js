import React from 'react';
import Banner from './Banner';
import CareBanner from './CareBanner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <CareBanner></CareBanner>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;
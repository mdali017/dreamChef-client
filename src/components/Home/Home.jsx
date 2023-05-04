import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import HeadChef from '../HeadChef/HeadChef';
import AllChef from '../AllChef/AllChef';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <HeadChef></HeadChef>
           <AllChef></AllChef>
        </div>
    );
};

export default Home;
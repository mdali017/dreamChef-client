import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import HeadChef from '../HeadChef/HeadChef';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <HeadChef></HeadChef>
        </div>
    );
};

export default Home;
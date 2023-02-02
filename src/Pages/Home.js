import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import ThumbnailHouse from '../components/ThumbnailHouse';

const Home = () => {
    

    return (
            <div>
            <Header/>
            <Loader/>
            <Banner />
            <ThumbnailHouse/>
            <Footer/>
            
            </div>
    );
};

export default Home;
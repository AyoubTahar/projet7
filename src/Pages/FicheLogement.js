import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import Information from '../components/Information';

const FicheLogement = () => {
    const location = useLocation()
    const {housedata} = location.state
    
    return (
        <div>
            <Header/>
            <ImageSlider housedata={housedata} />
            <Information tagdata={housedata} />
        </div>
    );
};

export default FicheLogement;
import React, { useEffect } from 'react';
import { useLocation, Navigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
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
            <Footer/>
        </div>
    );
};

export default FicheLogement;
import React from 'react';
import fullstarSvg from '../assets/img/star.svg'
import greystarSvg from '../assets/img/greystar.svg'

const Rating = (rate) => {
const fullStar= rate.rating
const greyStar= 5-rate.rating



    return (
        <div className="starcontainer">
            {
                Array.from(({length:fullStar}), (element, index) => 
                    <img key={index} src={fullstarSvg} alt="étoiles de notation pleine" />
                )}
            {
                Array.from(({length:greyStar}), (element, index) => 
                <img key={index} src={greystarSvg} alt="étoiles de notation vide" />
            )}
            
        </div>
    );
};

export default Rating;
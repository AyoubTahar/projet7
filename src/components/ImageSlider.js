import React, { useState } from 'react';

const ImageSlider = (slider) => {
const [currentIndex, setCurrentIndex] = useState(0)

const goToprevious = () => {
    const isFirdtSlide = currentIndex === 0
    const newIndex = isFirdtSlide ? slider.housedata.pictures.length - 1 : currentIndex -1 ;
    setCurrentIndex(newIndex)
}
const goToNext = () => {
    const isLastSlide = currentIndex === slider.housedata.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
}






    return (
        <div className='slider' >
            <div className={(slider.housedata.pictures.length > 1 ? "leftarrow" : "hide") } onClick={goToprevious}> ❰ </div>
            <div className='imageslider'style={{backgroundImage : `url(${slider.housedata.pictures[currentIndex]})`  }}></div>
            <div className={(slider.housedata.pictures.length > 1 ? "rightarrow" : "hide") } onClick={goToNext}>  ❱ </div>
            <div className="position">
            <p>{currentIndex + 1}/{slider.housedata.pictures.length}</p>
            </div>
        </div>
    );
};

export default ImageSlider;
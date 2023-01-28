import React from 'react';


const Banner = () => {
   
        if (window.location.href === 'http://localhost:3000/about') {
        return (
        <div className='bannerabout' >
        </div>

        )}
        else {
            return ( <div className='banner' >
            <h1>Chez vous, <br />
            partout et ailleurs </h1>
        </div>)
        };
    }

export default Banner;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Error = () => {
    return (
        <div>
        <Header/>
        
        <div className='error-content'>
            <h1>404</h1>
            <h2>Oups! La page que <br></br>
                vous demandez n'existe pas.</h2>
            <NavLink to="/">
            <p>Retourner à la page d'acceuil</p>
            </NavLink>
        </div>
        <Footer/>
        </div>
    );
};

export default Error;
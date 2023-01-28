import React from 'react';
import arrow from '../../src/assets/img/arrow.svg'
const Dropdown = (data) => {
    
    return (
        <div className='dropdown-container'>
            <div className="dropdown">
                <h2>Description</h2><img src={arrow} alt="fleche" />
                <div className='dropdown-menu'><p>{data.description}</p></div>
            </div>
            <div className="dropdown">
                <h2>Équipement</h2><img src={arrow} alt="fleche" />
                <div className="dropdown-menu">
                    <ul>
                        {
                            data.equipement.map((equipement) => 
                                <li>{equipement}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
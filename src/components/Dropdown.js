import React, { useState } from 'react';
import arrow from '../../src/assets/img/arrow.svg'
const Dropdown = (data) => {
const [openDescription, setOpenDescription] = useState(false)
const [openEquipement, setOpenEquipement] = useState(false)
    return (
        <div className="container">
        <div className='dropdown-container'>
            <div className="dropdown" onClick={() => {setOpenDescription(!openDescription)}}>
                <h2>Description</h2><img src={arrow} alt="fleche" className={`dropdown-trigger ${openDescription? 'active' : 'inactive'}`}  />
                
            </div>
            <div className={`dropdown-menu ${openDescription? 'active' : 'inactive'}`} >
                    <p>{data.description}</p>
            </div>
        </div>
        <div className="dropdown-container">
            <div className="dropdown" onClick={() => {setOpenEquipement(!openEquipement)}}>
                <h2>Équipement</h2><img src={arrow} alt="fleche" className={`dropdown-trigger ${openEquipement? 'active' : 'inactive'}`}   />
            </div>
            <div className={`dropdown-menu ${openEquipement? 'active' : 'inactive'}`} >
                    <ul>
                        {
                            data.equipement.map((equipement, index) => 
                                <li key={index}>{equipement}</li>
                            )
                        }
                    </ul>
            </div>
        </div>
        </div>
    );
};

export default Dropdown;
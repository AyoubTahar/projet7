import React , { useState }from 'react';
import arrow from '../../src/assets/img/arrow.svg'

const DropdownAbout = () => {
const [openFiabilité, setOpenFiabilité] = useState(false)
const [openRespect, setOpenRespect] = useState(false)
const [openService, setOpenService] = useState(false)
const [openSécurité, setOpenSécurité] = useState(false)
    return (
        <div className="about-container">
        <div className="dropdown-container">
            <div className="dropdown" onClick={() => {setOpenFiabilité(!openFiabilité)}}>
                <h2>Fiabilité</h2><img src={arrow} alt="fleche" className={`dropdown-trigger ${openFiabilité? 'active' : 'inactive'}`}  />
            </div>
            <div className={`dropdown-menu ${openFiabilité? 'active' : 'inactive'}`}>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
            <div className="dropdown" onClick={() => {setOpenRespect(!openRespect)}}>
                <h2>Respect</h2><img src={arrow} alt="fleche" className={`dropdown-trigger ${openRespect? 'active' : 'inactive'}`}  />
            </div>
            <div className={`dropdown-menu ${openRespect? 'active' : 'inactive'}`}>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <div className="dropdown" onClick={() => {setOpenService(!openService)}}>
                <h2>Service</h2><img src={arrow} alt="fleche" className={`dropdown-trigger ${openService? 'active' : 'inactive'}`}  />
            </div>
            <div className={`dropdown-menu ${openService? 'active' : 'inactive'}`}>
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <div className="dropdown" onClick={() => {setOpenSécurité(!openSécurité)}}>
                <h2>Sécurité</h2><img src={arrow} alt="fleche" className={`dropdown-trigger ${openSécurité? 'active' : 'inactive'}`}  />
            </div>
            <div className={`dropdown-menu ${openSécurité? 'active' : 'inactive'}`}>
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                    chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
                    cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>
        </div>
    );
};

export default DropdownAbout;
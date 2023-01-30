import React, { useEffect, useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';

const ThumbnailHouse = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get("datas.json")
            .then((res) => setData (res.data));
    }, [])
    return (
        <div className="thumbnailHouseBG">
        <div className="thumbnailHouse">
            {
                data.map((thumbnailHouse) => 
                <NavLink to={"/fichelogement/"+thumbnailHouse.id} key={thumbnailHouse.id} state = { {housedata : thumbnailHouse}}> 
                <div > 
                    <img src={thumbnailHouse.cover} alt='Aperçu du logement' /> 
                    <h2>{thumbnailHouse.title}</h2> 
                </div>
                </NavLink>)
            }
            
        </div>
        </div>
    );
};

export default ThumbnailHouse;
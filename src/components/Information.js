import React from 'react';
import Dropdown from './Dropdown';
import Host from './Host';
import Rating from './Rating';

const Information = (data) => {
const tagdata = data.tagdata
    return (
       <div className="information-container">
        <div className="information">
        <div className="name-tag-container">
        <div className="name">
                <h1 className="title">{tagdata.title}</h1>
                <p className="location">{tagdata.location}</p>
        </div>
        <div className="tagcontainer">
        {
            tagdata.tags.map((tag, index) =>
            <div className="tag" key={index}>{tag}</div>
            )
        }
        </div>
        </div>
        <div className="hostrate">
        <Rating rating={tagdata.rating} />
        <Host hostinfo={tagdata.host}/>
        </div>
        </div>
        <Dropdown equipement={tagdata.equipments} description={tagdata.description} />
        </div>
        

    );
};

export default Information;
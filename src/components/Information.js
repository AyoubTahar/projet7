import React from 'react';
import Rating from './Rating';

const Information = (data) => {
const tagdata = data.tagdata
    return (
       <div className="information">
        <div className="name">
                <p className="title">{tagdata.title}</p>
                <p className="location">{tagdata.location}</p>
        </div>
        <div className="tagcontainer">
        {
            tagdata.tags.map((tag, index) =>
            <div className="tag" key={index}>{tag}</div>
            )
        }
        </div>
        <Rating rating={tagdata.rating} />
        </div>
        

    );
};

export default Information;
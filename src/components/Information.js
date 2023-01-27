import React from 'react';

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
        </div>
        
            
    );
};

export default Information;
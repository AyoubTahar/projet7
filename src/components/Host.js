import React from 'react';

const Host = (data) => {
    const host = data.hostinfo
    return (
        <div className='host'>
                <p> {host.name} </p>
                <img src={host.picture} alt="l'hôte" />
        </div>
    );
};

export default Host;
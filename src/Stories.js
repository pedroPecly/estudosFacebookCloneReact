import react_logo from './img/react-logo.png';
import React from 'react';

function Stories() {

    return (
        <div className='stories'>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario Padrao</p>
            </div>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario Padrao</p>
            </div>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario Padrao</p>
            </div>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario Padrao</p>
            </div>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario Padrao</p>
            </div>
        </div>
    );

}

export default Stories;
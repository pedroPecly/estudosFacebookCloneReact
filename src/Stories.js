import react_logo from './img/react-logo.png';

function Stories() {

    return (
        <div className='stories'>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario X</p>
            </div>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario X</p>
            </div>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario X</p>
            </div>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario X</p>
            </div>
            <div className='storiesCard' style={{ backgroundImage: `url(${react_logo})` }}>
                <p>Usuario X</p>
            </div>
        </div>
    );

}

export default Stories;
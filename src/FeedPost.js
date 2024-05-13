import react_logo from './img/react-logo.png'
import usuario_padrao from './img/usuario_padrao.png';

function FeedPost() {
    return (
        <div className='feedPost'>
            <div className='feedPostSingle'>
                <div className='feedPost_profile'>
                    <img src={usuario_padrao}></img>
                    <h3>Usuario Padrao<br></br><span>20:00</span></h3>

                </div>
                <div className='feedPost_content'>
                    <p>texto de exemplo pra postagem sample</p>
                    <img src={react_logo}></img>
                </div>
            </div>
        </div>
    );
}

export default FeedPost;
import react_logo from './img/react-logo.png'
import usuario_padrao from './img/usuario_padrao.png';
import React from 'react';

function FeedPost(props) {
    return (
        <div className='feedPost'>
            <div className='feedPostSingle'>
                <div className='feedPost_profile'>
                    <img src={usuario_padrao}></img>
                    <h3>{props.nome}<br></br><span>{props.horario}</span></h3>

                </div>
                <div className='feedPost_content'>
                    <p>{props.conteudo}</p>
                    <img src={props.imagem}></img>
                </div>
            </div>
        </div>
    );
}

export default FeedPost;
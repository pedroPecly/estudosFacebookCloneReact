import usuario_padrao from './img/usuario_padrao.png';
import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from 'react-icons/ai';
import React from 'react';

function Feed() {
    return (
        <div className='feed'>
            <div className='feedForm'>
                <img src={usuario_padrao}></img>
                <input type='text' placeholder='no que voce esta pensando ?'></input>
            </div>
            <div className='feedIcons'>
                <div className='icons video'>
                    <AiFillVideoCamera></AiFillVideoCamera>
                    <span>Video ao vivo</span>
                </div>
                <div className='icons img'>
                    <AiOutlineFileImage></AiOutlineFileImage>
                    <span>Foto / video</span>
                </div>
                <div className='icons emoji'>
                    <AiOutlineMeh></AiOutlineMeh>
                    <span>Sentimento / atividade</span>
                </div>
            </div>
        </div>
    );
}

export default Feed;
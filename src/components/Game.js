import cloud from '../public/cloud.svg';
import tree from '../public/tree.svg';
import ground from '../public/ground.png';
import character from '../public/pixel.gif';
import { useEffect } from 'react';


const Game = () => {

    useEffect(()=>{
        document.querySelector('.character').addEventListener('click', (e)=>{
            document.querySelector('.character').classList.add('jump');
            setTimeout(()=>{
                document.querySelector('.character').classList.remove('jump');
            },500)
        })
    },[])

    return(
        <>
            <img src={tree} className="game-item tree" ></img>
            <img src={cloud} className="game-item cloud" ></img>
            <img src={character} className="game-item character" ></img>
            <div style={{backgroundImage:`url(${ground})`}} className="game-item ground" ></div>
        </>
    )
}

export default Game;
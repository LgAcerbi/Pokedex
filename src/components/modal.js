import react, {useState} from 'react';
import './modal.css';


export default function Modal({open, children, onClose}) {

    if(!open){
        return null;
    }
    else{
        return(
            <>
            <div className = "modalOverlay">
                
             </div>
            <div className = "modal">
                <div className= "titleDiv">
                    <a>{children.name}</a>
                    <button onClick= {onClose}>X</button>
                </div>
                <div className = "contentDiv">
                    <img className = "pokemonImgModal"src = {children.imgSrc}></img>
                    <div className = "Sprites">
                        <h1 className = "inGameView">IN-GAME VIEW</h1>
                        <div className = "spritesDefault">
                            <a>NORMAL</a>
                            <img className = "frontDefault" src = {children.frontSprite} alt = "Don't has"></img>
                            <img className = "backDefault" src = {children.backSprite} alt = ""></img>       
                        </div>
                        <div className = "spritesShiny">
                            <a>SHINY</a>
                            <img className = "frontShiny"src = {children.shinyFrontSprite} alt = "Don't has"></img>
                            <img className = "backShiny" src = {children.shinyBackSprite} alt = ""></img>
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}
import React from 'react'
import './Components.css'

function botao(props){
    return(
        <div>
            <button className="Botao">{props.label}</button>
        </div>
    )
}


export default botao
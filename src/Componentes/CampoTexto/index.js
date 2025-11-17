import { useState } from 'react'
import './CampoTexto.css'

function CampoTexto(props) {
    //let valor = 'Guilherme Silveira'
    const [valor, setValor]= useState('')

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto
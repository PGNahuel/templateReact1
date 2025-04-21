import { useState } from "react"
import React from 'react'

export default function Component() {
    const [text, setText] = useState()

    const textOnChange = (event) =>{
        setText(event.target.value);
    }

    const [updated, setUpdated] = useState()

    const buttonOnClick = ()=>{
        setUpdated(text)
    }

    return (
        <div>
            <input type="text" value={text} onChange={textOnChange}></input>
            <button onClick={buttonOnClick}>Actualizar</button>
            <p>Texto imput: {text}</p>
            <p>Texto actualizado: {updated}</p>
        </div>
    )
}
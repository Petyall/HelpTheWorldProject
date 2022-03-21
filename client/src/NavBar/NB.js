import React from 'react';
import Logo from './logomain.png'
import './NB.css'
import useState from 'react'

export default function NB(props) {
    return (
        <div>
        <div className = "NavBar">
            <a><img className = "logo" src={Logo} /></a>
            <a class="phone"> 8 (906) 426-48-58</a>
            <a class="button b-green" onClick={() => props.state(false)}>Предложить проект</a>
        </div>
        </div>
    );
}
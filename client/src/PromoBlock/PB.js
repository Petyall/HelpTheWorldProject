import React from 'react';
import Img from './img.png';
import './PB.css'

export default function PB() {
    return (
        <div className="bigdiv">
            <div className = "promo">
            <div className = "text">
                <p className = "BT">ПОМОГИ НУЖДАЮЩЕМУСЯ</p>
                <p className = "ST">HelpTheWorld это агрегатор, который собирает в одном месте информацию об организациях/странах/людях и тд. которые нуждаются в финансовой и гуманитарной помощи.</p>
            </div>
            <img className = "img" src={Img} />
            </div>
        </div>
    );
}
import React from "react";
import {Link} from 'react-router-dom'
import "../Style/mainInfo.css"
import linkedIn from "../Images/linkedin.png"

export default function MainInfo(){
    return(
        <div className="main-container">
            <h3>Romans Jefremovs</h3>
            <h4>Frontedn Developer</h4>
            <h5>romansjef.website</h5>
            <a href="https://github.com/YoungLatvia"><button type="button"><img src={linkedIn}/>LinkedIn</button></a>


        </div>
    )
}
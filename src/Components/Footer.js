import React from "react";
import "../Style/footer.css";
import twitter from "../Images/Twitter Icon.png";
import facebook from "../Images/Facebook Icon.png";
import instagram from "../Images/Instagram Icon.png"
import git from "../Images/GitHub Icon.png"

export default function Footer(){
    return(
        <footer>
            <ul>
                <li><img src={twitter} /></li>
                <li><img src={facebook} /></li>
                <li><img src={instagram} /></li>
                <li><img src={git} /></li>
            </ul>
        </footer>
    )
}
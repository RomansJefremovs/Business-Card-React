import React from "react";
import photo from "../Images/cropped.jpeg"
import "../Style/photo.css"

export default function Photo(){
    return(
        <div className="photo-container">
            <img src={photo} />
        </div>
    )
}
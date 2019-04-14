import React from 'react';
import './Display.css';

const Display = ({ display, textFormat}) => {
    console.log(display.textColor);
    return(
        <div className="card imageBackground card-content">
            <div className="imgTshirt text-center">
                 <img
                 className="img-responsive"
                 src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}`}
                 alt="img-Tshirt"
                 />
         </div>
         <div className="memeText text-center">
            <div className="upperText">
                <p style={{fontSize: textFormat, color: display.textColor}}> 
                 {`${display.upperText}`   || 'This Is The Upper Text' } </p>
            </div>
            <img className="imgTransparent"
            src={`${display.url}`  ||   'https://via.placeholder.com/400x300/D3D3D3/000000/?text=Your Image Here'}
            alt="Shirt-Img"
            />
            <div className="lowerText">
            <p style={{fontSize: textFormat, color: display.textColor}}> {`${display.lowerText}`        ||      'This Is The Lower Text' } </p>
            </div>
         </div>
        </div>
    )
}

export default Display
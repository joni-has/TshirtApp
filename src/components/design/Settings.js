import React from 'react';
const imgUrlBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'

const Settings = ({ color, upperText, lowerText, uploadImage, textSize, textColor, saveDesign }) => {
    return(
        <div className="card cardColor container">
            <h3 className="text-center">Settings</h3>
            <h4>Change T-shirt Colour</h4>
            <div className="tshirt-color">
                <img className="shirtColorHover" onClick={color} src={`${imgUrlBase}black.png`} alt="black-Tshirt" id="black" />
                <img className="shirtColorHover"  onClick={color} src={`${imgUrlBase}white.png`} alt="white-Tshirt" id="white" />
                <img className="shirtColorHover"  onClick={color} src={`${imgUrlBase}blue.png`} alt="blue-Tshirt" id="blue" />
                <img className="shirtColorHover"  onClick={color} src={`${imgUrlBase}grey.png`} alt="grey-Tshirt" id="grey" />
                <img className="shirtColorHover"  onClick={color} src={`${imgUrlBase}red.png`} alt="red-Tshirt" id="red" />
            </div>
            <hr /> 
            <h4>Shirt text</h4>
            <input onChange={upperText} type="text" className="form-control mb-2" placeholder="Upper Text" />
            <input onChange={lowerText} type="text" className="form-control mb-2" placeholder="Lower Text" />
            <hr />
            <h4> Upload Image </h4>
               
                <input onChange={uploadImage} type="file"  className="mb-2" />
          
            <h4> Text Size </h4>
            <input onChange={textSize} type="range" className="form-control mb-2" min="12" max="34" />
            <hr />
            <h4> Text Colour </h4>
            <select onChange={textColor} className="form-control mb-2"> 
                <option> white </option>
                <option> Black </option>
                <option> Blue </option>
                <option> Grey </option>
                <option> Red </option>
                </select> 
                <hr /> 
                <button className="btn btn-primary" id="saveDesign" onClick={saveDesign}> Save </button>
            
        </div>
    )
}

export default Settings
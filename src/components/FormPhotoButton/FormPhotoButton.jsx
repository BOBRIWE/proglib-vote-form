import React from "react";
import './FormPhotoButton.scss';
import photoIcon from './../../assets/photo-icon.svg';

function FormPhotoButton() {
    return (
        <button className="FormPhotoButton">
            <img src={photoIcon}/>
            <span className="FormPhotoButton__text">Фото</span>
        </button>
    );
}

export default FormPhotoButton;
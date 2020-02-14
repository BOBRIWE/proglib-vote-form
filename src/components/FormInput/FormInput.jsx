import React from 'react';
import './FormInput.scss';

function FormInput() {
    return (
        <div>
            <textarea className="FormInput__input" placeholder="Что вы хотите обсудить?"/>
            <div className="FormInput__error">Неправильно заполнено поле</div>
        </div>
    );
}

export default FormInput;
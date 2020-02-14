import React from 'react';
import './FormTextarea.scss';

function FormTextarea() {
    return (
        <div>
            <textarea className="FormTextarea__input" placeholder="Заголовок"/>
            <div className="FormTextarea__error">Неправильно заполнено поле</div>
        </div>
    )
}

export default FormTextarea;
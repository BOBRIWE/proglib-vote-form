import React from "react";
import './FormPhotoButton.scss';
import photoIcon from './../../assets/photo-icon.svg';

class FormPhotoButton extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    onClick(e) {
        e.preventDefault();
        this.inputRef.current.click();
    }

    componentDidMount() {
        this.inputRef.current.addEventListener('change', () => {
            const files = [...this.inputRef.current.files];
            this.props.filesUpdated(files);
        });
    }

    render() {
        return (
            <div className="FormPhotoButton">
                <button onClick={this.onClick.bind(this)} className="FormPhotoButton__button">
                    <img src={photoIcon}/>
                    <span className="FormPhotoButton__text">Фото</span>
                </button>
                <input ref={this.inputRef} multiple className="FormPhotoButton__file-input" type="file" name="images[]" accept="image/*"/>
            </div>
        );
    }
}

export default FormPhotoButton;
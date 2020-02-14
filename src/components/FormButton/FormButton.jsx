import React from "react";
import './FormButton.scss';

class FormButton extends React.Component {
    onClick(e) {
        this.props.onClick(e);
    }

    render() {
        return (
            <button onClick={this.onClick.bind(this)} className="FormButton">
                {this.props.title}
            </button>
        );
    }
}

export default FormButton;
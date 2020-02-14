import './FormTag.scss';
import React from 'react';

class FormTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
    }

    buttonClick(e) {
        e.preventDefault();
        this.setState({checked: !this.state.checked});
    }


    render() {
        return (
            <div className="FormTag">
                <input
                    defaultChecked={this.state.checked}
                    className="FormTag__checkbox"
                    name="tags[]"
                    defaultValue={this.props.tagId}
                />
                <button
                    className={`FormTag__button ${this.state.checked ? 'FormTag__button--active' : ''}`}
                    onClick={this.buttonClick.bind(this)}
                >
                    <span>{this.props.tagName}</span>
                </button>
            </div>
        );
    }
}

export default FormTag;
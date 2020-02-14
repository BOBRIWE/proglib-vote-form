import './FormTag.scss';
import React from 'react';

class FormTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
    }

    buttonClick(e) {
        e.preventDefault();

        if (this.state.checked) {
            this.props.removeTag(this.props.tagId);
        } else {
            this.props.addTag(this.props.tagId);
        }

        this.setState({checked: !this.state.checked});
    }


    render() {
        return (
            <div className="FormTag">
                <input
                    type="checkbox"
                    onChange={() => {}}
                    checked={this.state.checked}
                    className="FormTag__checkbox"
                    name="tags[]"
                    value={this.props.tagId}
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
import React from 'react';
import './FormVoteItem.scss';

class FormVoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    onInput(e) {
        this.setState({
            value: e.target.value
        });
    }

    removeClick() {
        this.props.removeClick(this.props.id);
    }

    render() {
        return (
            <div className="FormVoteItem">
                <input onInput={this.onInput.bind(this)} className="FormVoteItem__input" placeholder={this.props.name} type="text"/>
                <div className="FormVoteItem__options">
                    <div onClick={this.removeClick.bind(this)} className="FormVoteItem__remove">x</div>
                </div>
                {this.state.value !== null
                    ?
                    <div className="FormVoteItem__data-keep">
                        <input type="hidden" name={`vote-data[${this.props.id}][id]`}/>
                        <input type="hidden" name={`vote-data[${this.props.id}][text]`}/>
                    </div> : null}
            </div>
        );
    }
}

export default FormVoteItem;
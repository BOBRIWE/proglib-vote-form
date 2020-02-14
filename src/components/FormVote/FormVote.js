import React from 'react';
import FormVoteItem from "../FormVoteItem/FormVoteItem";
import FormButton from "../FormButton/FormButton";
import './FormVote.scss';

class FormVote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            voteItems: [{id: 0}]
        };
    }

    removeItem(id) {
        const voteItems = [...this.state.voteItems];
        voteItems.splice(id, 1);
        this.setState({
            voteItems: voteItems
        });
    }

    addItem(e) {
        e.preventDefault();

        const voteItems = [...this.state.voteItems];
        voteItems.push({id: voteItems.length});
        this.setState({
            voteItems: voteItems
        });
    }

    render() {
        return (
            <div className="FormVote">
                {this.state.voteItems.map((value, index, array) => {
                    return <FormVoteItem key={value.id} removeClick={this.removeItem.bind(this)} id={index} name={`Вариант #${index + 1}`}/>;
                })}
                <FormButton onClick={this.addItem.bind(this)} title="+"/>
            </div>
        );
    }
}

export default FormVote;
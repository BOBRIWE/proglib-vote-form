import React from 'react';
import FormVoteItem from "../FormVoteItem/FormVoteItem";
import FormButton from "../FormButton/FormButton";
import './FormVote.scss';

class FormVote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            voteItems: [{id: 0, value: null}]
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
        voteItems.push({id: voteItems[voteItems.length - 1].id + 1, value: e.target.value});
        this.setState({
            voteItems: voteItems
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevState.voteItems) !== JSON.stringify(this.state.voteItems)) {
            this.props.voteItemsChanged(this.state.voteItems);
        }
    }

    render() {
        return (
            <div className="FormVote">
                {this.state.voteItems.map((value, index, array) => {
                    return <FormVoteItem
                        key={value.id}
                        onInput={(val) => {
                            value.value = val;
                            this.props.voteItemsChanged(this.state.voteItems);
                            this.setState({voteItems: this.state.voteItems});
                        }}
                        removeClick={() => {this.removeItem(index)}}
                        id={value.id}
                        name={`Вариант #${index + 1}`}
                    />;
                })}
                <FormButton onClick={this.addItem.bind(this)} title="+"/>
            </div>
        );
    }
}

export default FormVote;
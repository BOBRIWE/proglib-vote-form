import React from 'react';
import './Form.scss';
import FormTag from '../FormTag/FormTag';
import FormTextarea from '../FormTextarea/FormTextarea';
import FormVote from "../FormVote/FormVote";
import FormButton from "../FormButton/FormButton";
import FormPhotoButton from "../FormPhotoButton/FormPhotoButton";
import FormPhotoContainer from "../FormPhotoContainer/FormPhotoContainer";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.formRef = React.createRef();

        this.state = {
            files: [],
            tags: [],
            title: null,
            question: null,
            voteTitle: null,
            voteItems: [],
        };
    }

    addTag(id) {
        const { tags } = this.state;
        tags.push(id);
        this.setState({tags});
    }

    removeTag(id) {
        const { tags } = this.state;
        const i = tags.indexOf(id);
        tags.splice(i, 1);
        this.setState({tags});
    }

    render() {
        return (
            <form ref={this.formRef}>
                <article className="Form__view">
                    <header className="Form__tag-list">
                        {this.props.tags.map((value, index) => {
                            return <FormTag key={index} addTag={this.addTag.bind(this)} removeTag={this.removeTag.bind(this)} tagId={index} tagName={value}/>;
                        })}
                    </header>
                    <main className="Form__main">
                        <FormTextarea onUpdate={(str) => {this.setState({title: str})}} validate={(str) => {return str.length > 0}} name="title" placeholder="Заголовок" max={120}/>
                        <FormTextarea onUpdate={(str) => {this.setState({question: str})}} validate={(str) => {return str.length > 0}} name="question" placeholder="Что вы хотите обсудить?" type="small" max={200}/>
                        <FormTextarea onUpdate={(str) => {this.setState({voteTitle: str})}} validate={(str) => {return str.length > 0}} name="vote-title" placeholder="Задайте вопрос" type="small"/>
                        <FormVote voteItemsChanged={(voteItems) => { this.setState({voteItems})}}/>
                    </main>
                    <footer className="Form__footer">
                        <FormPhotoContainer files={this.state.files}/>
                        <div className="Form__footer__buttons">
                            <FormPhotoButton filesUpdated={(files) => {this.setState({files})}}/>
                            <FormButton onClick={(e) => {this.props.submit({...this.state, e, form: this.formRef.current})}} title="Сохранить"/>
                        </div>
                    </footer>
                </article>
            </form>
        );
    }
}

export default Form;
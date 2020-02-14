import React from 'react';
import './Form.scss';
import FormTag from '../FormTag/FormTag';
import FormTextarea from '../FormTextarea/FormTextarea';
import FormInput from "../FormInput/FormInput";
import FormVote from "../FormVote/FormVote";
import FormButton from "../FormButton/FormButton";
import FormPhotoButton from "../FormPhotoButton/FormPhotoButton";
import FormPhotoContainer from "../FormPhotoContainer/FormPhotoContainer";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {files: []};
    }

    render() {
        return (
            <form>
                <article className="Form__view">
                    <header className="Form__tag-list">
                        <FormTag tagId="1" tagName="React"/>
                        <FormTag tagId="2" tagName="JavaScript"/>
                        <FormTag tagId="3" tagName="Docker"/>
                        <FormTag tagId="4" tagName="HTML"/>
                    </header>
                    <main className="Form__main">
                        <FormTextarea validate={(str) => {return str.length > 0}} name="title" placeholder="Заголовок" max={120}/>
                        <FormTextarea validate={(str) => {return str.length > 0}} name="question" placeholder="Что вы хотите обсудить?" type="small" max={200}/>
                        <FormTextarea validate={(str) => {return str.length > 0}} name="vote-title" placeholder="Задайте вопрос" type="small"/>
                        <FormVote/>
                    </main>
                    <footer className="Form__footer">
                        <FormPhotoContainer files={this.state.files}/>
                        <div className="Form__footer__buttons">
                            <FormPhotoButton filesUpdated={(files) => {this.setState({files})}}/>
                            <FormButton onClick={() => {}} title="Сохранить"/>
                        </div>
                    </footer>
                </article>
            </form>
        );
    }
}

export default Form;
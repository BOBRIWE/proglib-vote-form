import React from 'react';
import './Form.scss';
import FormTag from '../FormTag/FormTag';
import FormTextarea from '../FormTextarea/FormTextarea';
import FormInput from "../FormInput/FormInput";
import FormVote from "../FormVote/FormVote";
import FormButton from "../FormButton/FormButton";
import FormPhotoButton from "../FormPhotoButton/FormPhotoButton";

function Form() {
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
                    <FormTextarea/>
                    <FormInput/>
                    <FormInput/>
                    <FormVote/>
                </main>
                <footer>
                    <FormPhotoButton/>
                    <FormButton/>
                </footer>
            </article>
        </form>
    );
}

export default Form;
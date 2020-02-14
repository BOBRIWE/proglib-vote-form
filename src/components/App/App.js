import React from 'react';
import './App.css';
import Form from '../Form/Form';

function App() {
    return (
        <div className="App">
            <Form submit={validate}/>
        </div>
    );
}

function validate({
                      files,
                      tags,
                      title,
                      question,
                      voteTitle,
                      voteItems,
                      e,
                      form
                  }) {
    if (tags.length === 0) {
        alert('Не выбран тег!');
        e.preventDefault();
    } else if (!title) {
        alert('Заголовок пуст!');
        e.preventDefault();
    } else if (!question) {
        alert('Вопрос не указан!');
        e.preventDefault();
    } else if (!voteTitle) {
        alert('Название голосования не указано!');
        e.preventDefault();
    } else if (!voteItems.find((value) => {
        return !!value.value;
    })) {
        alert('Пункты голосования не указаны!');
        e.preventDefault();
    } else {
        fetch('http://localhost:3001', {
            method: 'POST',
            body: new FormData(form)
        }).finally(() => {

        });
        e.preventDefault();
    }
}

export default App;

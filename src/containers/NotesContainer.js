import React, { Component } from 'react';
import NotesForm from '../components/NotesForm';
import { createNote } from '../services/notesApi';

export default class NotesContainer extends Component {
  state = {
    title: '',
    body: ''
  }

  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    createNote(this.state.title, this.state.body)
      .then(res => console.log(res));
  }

  render() {
    return (
      <NotesForm 
        onChange={this.changeHandler} 
        onSubmit={this.submitHandler}
        title={this.state.title}
        body={this.state.body}
      />
    );
  }
}

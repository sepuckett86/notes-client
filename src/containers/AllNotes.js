import React, { Component } from 'react';
import Notes from '../components/Notes';
import { getNotes } from '../services/notesApi';

export default class AllNotes extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    getNotes()
      .then(notes => {
        this.setState({
          notes
        });
      });
  }

  render() {
    return (
      <Notes notes={this.state.notes}/>
    );
  }
}



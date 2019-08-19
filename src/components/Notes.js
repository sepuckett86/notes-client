import React from 'react';
import PropTypes from 'prop-types';

function Notes({ notes }) {
  const noteList = notes.map(note => {
    return (
      <li key={note.title + note.body}>
        <p>{note.title}</p>
        <p>{note.body}</p>
      </li>
    );
  });
  return (
    <ul>
      {noteList}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;

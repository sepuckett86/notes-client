import React from 'react';
import PropTypes from 'prop-types';

function Notes({ notes }) {
  const noteList = notes.map(note => {
    return (
      <li key={note.title + note.body}>
        {note.title}
        {note.body}
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

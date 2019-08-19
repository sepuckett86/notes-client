import React from 'react';
import PropTypes from 'prop-types';

function NotesForm({ onChange, onSubmit, title, body }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Title:{' '}
        <input name="title" type="text" value={title} onChange={onChange}/>
      </label>
      <label>
        Body:{' '}
        <input name="body" type="text" value={body} onChange={onChange}/>
      </label>
      <button>Submit</button>
    </form>
  );
}

NotesForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default NotesForm;

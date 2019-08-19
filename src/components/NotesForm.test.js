import React from 'react';
import { shallow } from 'enzyme';
import NotesForm from './NotesForm';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<NotesForm 
      title="My Title"
      body="My really good note"
      onChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

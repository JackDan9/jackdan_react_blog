import React from 'react';

import { connect } from 'react-redux';
import { addBlog } from '../../store/actions';

const AddBlog = ({dispatch}) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return;
        }
        dispatch(addBlog(input.value));
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Blog
        </button>
      </form>
    </div>
  )
}

export default connect()(AddBlog);
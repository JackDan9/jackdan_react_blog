let nextBlogId = 0;

export const addBlog = text => ({
  type: 'ADD_BLOG',
  id: nextBlogId++,
  text
});

export const toggleBlog = id => ({
  type: 'TOGGLE_BLOG',
  id
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

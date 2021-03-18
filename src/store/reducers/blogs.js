const blogs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_BLOG':
      return state.map(blog =>
        (blog.id === action.id) ? {
          ...blog,
          completed: !blog.completed
        } : blog
      )
    default:
      return state
  }
}

export default blogs;
import { connect } from 'react-redux';
import { toggleBlog } from '../../store/actions';
import BlogList from '../../components/blog-list';


const getVisibleBlogs = (blogs, filter) => {
  switch(filter) {
    case 'SHOW_COMPLETED':
      return blogs.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return blogs.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return blogs
  }
}

const mapStateToProps = state => ({
  blogs: getVisibleBlogs(state.blogs, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleBlog: id => dispatch(toggleBlog(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);
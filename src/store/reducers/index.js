import {
  combineReducers
} from 'redux';
import blogs from './blogs';
import visibilityFilter from './visibilityFilter'


export default combineReducers({
  blogs,
  visibilityFilter
})
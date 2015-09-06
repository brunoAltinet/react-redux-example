import { combineReducers } from 'redux';
//import {reducer as form} from 'redux-form';
import items from './items';
import expenseList from './expenseList';
import {reducer as formReducer} from 'redux-form';
export default combineReducers({
//  form,
  items,
  expenseList,
  form:formReducer
});

import React, {Component} from 'react';
import ExpenseList from '../components/expenseList.jsx';
import {fetchExpenseList as preFetch} from '../ducks/expenseList';

export default class  Home extends Component{

  render() {
    return (
      <div className="home">
        <ExpenseList />
      </div>
    );
  }

//  static fetchData(store) {
//  return store.dispatch(preFetch());
//
//}

}

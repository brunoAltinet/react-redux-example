import React, {Component,PropTypes} from 'react';
import ExpenseList from '../components/expenseList.jsx';
import {fetchExpenseList as preFetch} from '../ducks/expenseList';
import ExpenseForm from '../components/expenseForm.jsx';
import {initialize} from 'redux-form';
import {connect} from 'react-redux';
import * as expenseListAcs from '../ducks/expenseList'
import {bindActionCreators} from 'redux';

@connect(
        state=>
        ({
            expenseList: state.expenseList.data
        }),
        dispatch => bindActionCreators({
        ...expenseListAcs, initialize
    }, dispatch)
)
export default
class ExpenseEdit extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.id = this.props.params.id;
        var filt = this.props.expenseList.filter(x=>x.id == this.id);
        var data={};
        if(filt.length>0)
            data=filt[0];
        this.props.initialize('expense', data)
    }


    render() {
        return (<div>
            <h3>{this.id?"Edit expense":"Add new expense"}</h3>
            <ExpenseForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        );
    }

    handleSubmit(data) {
this.props.submitExpense(data);
this.context.router.transitionTo('/home');
    }

}

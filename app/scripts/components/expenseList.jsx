import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as expenseListAcs from '../ducks/expenseList'
import {bindActionCreators} from 'redux';
import {fetchExpenseList as preFetch} from '../ducks/expenseList';
import mui,{Styles,IconButton,List,ListItem,LinearProgress as Progress} from 'material-ui';

let { Colors, Spacing, Typography } = Styles;
let RaisedButton = mui.RaisedButton;

@connect(
        state=>
        ({
            expenseList: state.expenseList.data,
            loaded:state.expenseList.loaded,
            loading:state.expenseList.loading
        }),
        dispatch => bindActionCreators({
        ...expenseListAcs
    }, dispatch)
)

class ExpenseList extends Component {

constructor(props)
{
    super(props);
    this.fetchExpenseList=props.fetchExpenseList;
}

    static contextTypes = {
        router: React.PropTypes.object
    };

    componentDidMount()
    {
        this.fetchExpenseList();
    }

    render() {
console.log('renderLog');
        const {expenseList, loading,loaded} = this.props;

        var expenseListStr = null;
        if (loaded)
            expenseListStr = expenseList.map((item, itemIndex) =>(
                <ListItem key={item.id} primaryText={<span> {item.company}  &pound;{item.nettoValue}</span>}
                          secondaryText={<span> Spent by:{item.lastName}, {item.firstName}  </span>}
                          onTouchTap={(e)=>{e.preventDefault();this.navigateTo(item.id);}}
                    />
                ));
        return (
            <div>
                <RaisedButton label="Add new" secondary={true} onTouchTap={()=>this.navigateTo(0)} /> &nbsp;
                {loading? <Progress mode="indeterminate" style={{marginTop:'10px'}}  />:
                (<List>
                    {expenseListStr}
                </List>)}
            </div>
        );
    }


 navigateTo(id)
 {
     console.log("buttonClicked!")
     if(!this.context || !this.context.router)
        console.log("no context or no router!");
     this.context.router.transitionTo('/expenses/'+id);
 }

}

export default ExpenseList;
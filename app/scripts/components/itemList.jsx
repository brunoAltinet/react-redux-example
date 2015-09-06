import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as itemAcs from '../ducks/items'
import {bindActionCreators} from 'redux';
import {fetchItems as preFetch} from '../ducks/items';
import mui,{Styles,IconButton} from 'material-ui';

let { Colors, Spacing, Typography } = Styles;
let RaisedButton = mui.RaisedButton;

@connect(
        state=>
        ({
            items: state.items.data
        }),
        dispatch => bindActionCreators({
        ...itemAcs
    }, dispatch)
)
export default
class ItemList extends Component {


    render() {

        const {items, fetchItems} = this.props;

        var itemStr = null;
        if (items)
            itemStr = items.map((item, itemIndex) =>(<li key={ item }>{ item }</li>));
        return (
            <div>
                <RaisedButton label="Load Text" className=' btn btn-success' onClick={fetchItems} />
                <ul>
                    {itemStr}
                </ul>
            </div>
        );
    }
}
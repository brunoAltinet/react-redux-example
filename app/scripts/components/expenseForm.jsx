import React, {Component, PropTypes} from 'react';
import {connectReduxForm} from 'redux-form';
import expenseList from '../ducks/expenseList.js'
import {TextField,RaisedButton} from 'material-ui';

@connectReduxForm({
    form: 'expense',
    fields: ['id','company', 'address', 'phone', 'firstName','lastName','nettoValue']
})
class ContactForm extends Component {
    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired
    }

    render() {
        const { fields: {id,company, address, phone,firstName,lastName,nettoValue}, handleSubmit } = this.props;
        return (

            <form onSubmit={handleSubmit}>
                <h4>Payee Info</h4>
                <input type="hidden" {...id}/>
                <TextField hintText="Payee" {...company}/><br/>

                <TextField hintText="Address" {...address}/><br/>

                <TextField hintText="Phone number" {...phone}/><br/>

                <h4>Paid by</h4>
                <TextField hintText="First name" {...firstName}/><br/>

                <TextField hintText="Last name" {...lastName}/><br/>

                <h4>Amount paid</h4>
                &pound;<TextField type="number" hintText="Amount in pounds" {...nettoValue}/><br/>

                <RaisedButton primary={true} onClick={handleSubmit} label="Submit"/>

            </form>
        );
    }
}

// export the wrapped component
export default ContactForm;
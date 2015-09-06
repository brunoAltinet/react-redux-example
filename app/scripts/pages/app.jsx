import React, {Component,PropTypes} from 'react';
import Header from '../components/header.jsx';
import '../../stylus/main.styl'
import {createTransitionHook} from '../universalRouter';
import mui,{AppCanvas} from 'material-ui';

export default class App extends Component {

    componentWillMount() {
        const {router, store} = this.context;
        this.transitionHook = createTransitionHook(store);
        router.addTransitionHook(this.transitionHook);
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProps) {
        //if (!this.props.user && nextProps.user) {
        //  // login
        //  this.context.router.transitionTo('/loginSuccess');
        //} else if (this.props.user && !nextProps.user) {
        //  // logout
        //  this.context.router.transitionTo('/');
        //}
    }

    componentWillUnmount() {
        const {router} = this.context;
        router.removeTransitionHook(this.transitionHook);
    }

    render() {

        // Injected by React Router
        const { location, children } = this.props;
        return (
            <AppCanvas>
                <Header />

                <div className="content">
                    {children}
                </div>
            </AppCanvas>
        );
    }

    static fetchData(store) {
        const promises = [];
        //if (!isInfoLoaded(store.getState())) {
        //  promises.push(store.dispatch(loadInfo()));
        //}
        //if (!isAuthLoaded(store.getState())) {
        //  promises.push(store.dispatch(loadAuth()));
        //}
        return Promise.all(promises);
    }

}
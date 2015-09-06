import mui from 'material-ui';
import {Router} from 'react-router';
import React from 'react';

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
ThemeManager.getCurrentTheme().setPalette({
    primary1Color: "#041E74",
    primary2Color: "#2352A0",
    primary3Color: "#2352A0",
    accent1Color: "#ff7900",
    accent2Color: "#ffa930",
    accent3Color: "#ff7900",
});

export default class AppRoot {

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        return (
            <Router {...this.props.initialState} children={this.props.routes} />
        );;
    }
}

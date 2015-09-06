let React = require('react');
let Router = require('react-router');
let { MenuItem, LeftNav, Styles } = require('material-ui');
let { Colors, Spacing, Typography } = Styles;
const EXIT_APP='exitApp';

let menuItems = [
    { route: 'home', text: 'Expenses' },
    { route: 'info', text: 'Info' }
    //{route: EXIT_APP, text:'Exit'}
    //{ route: 'components', text: 'Components' },
    //{ type: MenuItem.Types.SUBHEADER, text: 'Resources' },
    //{ type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
    //{ type: MenuItem.Types.LINK, payload: 'http://facebook.github.io/react', text: 'React' },
    //{ type: MenuItem.Types.LINK, payload: 'https://www.google.com/design/spec/material-design/introduction.html', text: 'Material Design' }
];


export default class AppLeftNav extends React.Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this._getSelectedIndex = this._getSelectedIndex.bind(this);
        this._onLeftNavChange = this._onLeftNavChange.bind(this);
        this._onHeaderClick = this._onHeaderClick.bind(this);
    }


    static contextTypes = {
        router: React.PropTypes.object
    };


    getStyles() {
        return {
            cursor: 'pointer',
            //.mui-font-style-headline
            fontSize: '24px',
            color: Typography.textFullWhite,
            lineHeight: Spacing.desktopKeylineIncrement + 'px',
            fontWeight: Typography.fontWeightLight,
            backgroundColor: "#081FCC",
            paddingLeft: Spacing.desktopGutter,
            paddingTop: '0px',
            marginBottom: '8px'
        };
    }

    render() {
        let header = (
            <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
                CordExp

            </div>
        );

        return (
            <LeftNav
                ref="leftNav"
                docked={false}
                isInitiallyOpen={false}
                header={header}
                menuItems={menuItems}
                selectedIndex={this._getSelectedIndex()}
                onChange={this._onLeftNavChange} />
        );
    }

    toggle() {
        this.refs.leftNav.toggle();
    }

    _getSelectedIndex() {
        let currentItem;

        for (let i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
        }
    }

    _onLeftNavChange(e, key, payload) {
        e.preventDefault();
        if(payload.route==EXIT_APP && false)
        {
            navigator.app.exitApp();
            return;
        }
        this.context.router.transitionTo(payload.route);
    }

    _onHeaderClick() {
        this.refs.leftNav.close();
    }

}
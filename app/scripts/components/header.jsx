import React from 'react';
import { Link } from 'react-router';
import {AppBar,IconButton,Styles} from 'material-ui';
let { Colors, Spacing, Typography } = Styles;
let AppLeftNav = require('./app-left-nav.jsx');

export default class Header {

  render() {
    return (
        <div>
      <AppBar zDepth={0} onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}
          iconElementRight={<img src='images/logo.png' />}/>
          <AppLeftNav ref="leftNav"/>
          </div>
    );
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

}
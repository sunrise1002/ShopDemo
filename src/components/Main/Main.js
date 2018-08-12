import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {

  /*static navigationOptions = {
    header : null
  };*/

  gotoAuthentication = () => {
    this.props.navigation.navigate({ routeName: 'AUTHENTICATION' });
  };

  gotoChangeInfo = () => {
    this.props.navigation.navigate({ 
      routeName: 'CHANGEINFO',
      //params: { transition: 'LeftTransitionPram' }
    });
  };

  gotoOrderHistory = () => {
    this.props.navigation.navigate('ORDERHISTORY');
  };

  openDrawer = () => {
    this.drawer.open();
  };

  closeDrawer = () => {
    this.drawer.close();
  };

  render() {
    return (

      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Menu 
                    propGotoAuthentication={() => this.gotoAuthentication()}
                    propGotoChangeInfo={() => this.gotoChangeInfo()}
                    propGotoOrderHistory={() => this.gotoOrderHistory()}
        />}
        openDrawerOffset={0.4}
        tapToClose
      >
        <Shop propOpen={() => this.openDrawer()} />
      </Drawer>
    );
  }
}


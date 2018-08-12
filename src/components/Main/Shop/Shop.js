import TabNavigator from 'react-native-tab-navigator';
import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';
import Header from './Header';

/* eslint-disable global-require */ //Khong co dong nay thi require link anh se bi loi
const homeIcon = require('../../../media/appIcon/home0.png');
const homeSelectedIcon = require('../../../media/appIcon/home.png');
const cartIcon = require('../../../media/appIcon/cart0.png');
const cartSelectedIcon = require('../../../media/appIcon/cart.png');
const contactIcon = require('../../../media/appIcon/contact0.png');
const contactSelectedIcon = require('../../../media/appIcon/contact.png');
const searchIcon = require('../../../media/appIcon/search0.png');
const searchSelectedIcon = require('../../../media/appIcon/search.png');

const { height } = Dimensions.get('window');

export default class Shop extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      selectedTab: 'Home'
    };
  }
  
  render() {
    return (
      <View style={{ flex: 1 }} >

        <Header propOpen={this.props.propOpen} />

        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home"
            onPress={() => { this.setState({ selectedTab: 'Home' }); }}
            renderIcon={() => <Image source={homeIcon} style={styles.icon} />}
            renderSelectedIcon={() => <Image source={homeSelectedIcon} style={styles.icon} />}
            badgeText='1'
            selectedTitleStyle={{ color: '#0fbc88' }}
          >
            <Home />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'Cart'}
            title="Cart"
            onPress={() => { this.setState({ selectedTab: 'Cart' }); }}
            renderIcon={() => <Image source={cartIcon} style={styles.icon} />}
            renderSelectedIcon={() => <Image source={cartSelectedIcon} style={styles.icon} />}
            badgeText='1'
            selectedTitleStyle={{ color: '#0fbc88' }}
          >
            <Cart />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'Contact'}
            title="Contact"
            onPress={() => { this.setState({ selectedTab: 'Contact' }); }}
            renderIcon={() => <Image source={contactIcon} style={styles.icon} />}
            renderSelectedIcon={() => <Image source={contactSelectedIcon} style={styles.icon} />}
            badgeText='1'
            selectedTitleStyle={{ color: '#0fbc88' }}
          >
            <Contact />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'Search'}
            title="Search"
            onPress={() => { this.setState({ selectedTab: 'Search' }); }}
            renderIcon={() => <Image source={searchIcon} style={styles.icon} />}
            renderSelectedIcon={() => <Image source={searchSelectedIcon} style={styles.icon} />}
            badgeText='1'
            selectedTitleStyle={{ color: '#0fbc88' }}
          >
            <Search />
          </TabNavigator.Item>

        </TabNavigator>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: height / 25,
    height: height / 25
  },
});

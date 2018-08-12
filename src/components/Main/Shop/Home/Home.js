import React, { Component } from 'react';
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

export default class Home extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RightTransition = (index, position, width) => {
  const sceneRange = [index - 1, index, index + 1];
  const outputWidth = [width, 0, 0];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputWidth
  });

  return {
    transform: [{ translateX: transition }]
  };
};

const NavigationConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },

    screenInterpolator: sceneProps => {
      const { position, scene } = sceneProps;
      const { index } = scene;
      const width = sceneProps.layout.initWidth;

      return RightTransition(index, position, width);
    }
  };
};

const RootStack = createStackNavigator(
  {
    HOME_VIEW: {
      screen: HomeView,
      navigationOptions: () => ({ header: null })
    },

    LIST_PRODUCT: {
      screen: ListProduct,
      navigationOptions: () => ({ header: null })
    },

    PRODUCT_DETAIL: {
      screen: ProductDetail,
      navigationOptions: () => ({ header: null })
    }
  },

  {
    initialRouteName: 'HOME_VIEW',
    transitionConfig: NavigationConfig,
  }
);


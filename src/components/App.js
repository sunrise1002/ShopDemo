import React, { Component } from 'react';
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

export default class App extends Component {
 
  render() {
    return (
      <RootStack />
    );
  }
}

//Phan custom transition nay phai viet phia tren phan createStackNavigator
const RightTransition = (index, position, width) => {
  const sceneRange = [index - 1, index, index + 1];
  const outputWidth = [width, 0, 0];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputWidth,
  });

  return {
    transform: [{ translateX: transition }]
  };
};

export const LeftTransition = (index, position, width) => {
  const sceneRange = [index - 1, index, index + 1];
  const outputWidth = [0, 0, width];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputWidth
  });

  return {
    tranform: [{ translateX: transition }]
  };
};

const NavigationConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },

    screenInterpolator: sceneProps => {
      const { position, scene } = sceneProps;
      const { index, route } = scene; //Doan nay chu y la scene khong phai sceneProps
      //const params = route.params || {};
      //const transition = params.transition || 'default';
      const width = sceneProps.layout.initWidth;

      return RightTransition(index, position, width);
      
      /*return {
        LeftTransitionPram: LeftTransition(index, position, width),
        default: RightTransition(index, position, width),
      }[transition];*/
    }
  };
};


/*const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },

    screenInterpolator: sceneProps => {
      const { layout, position, scene, } = sceneProps;
      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      });

      const slideFromRight = { transform: [{ translateX }] };

      return slideFromRight;
    },
  };
};
*/

const RootStack = createStackNavigator(
  {
    MAIN: {
      screen: Main,
      navigationOptions: () => ({ header: null }),
    },

    AUTHENTICATION: {
      screen: Authentication,
      navigationOptions: () => ({ header: null }),
    },

    CHANGEINFO: {
      screen: ChangeInfo,
      navigationOptions: () => ({ header: null }),
    },

    ORDERHISTORY: {
      screen: OrderHistory,
      navigationOptions: () => ({ header: null }),
    }
  },

  {
    initialRouteName: 'MAIN',
    transitionConfig: NavigationConfig,
  },
);

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';

const profilePic = require('../../media/temp/profile.png');

const { height } = Dimensions.get('window');
export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLogin: true,
    };
  }
  
  render() {
    const loginScreen = (
      <View style={styles.container} >
        <View style={{ flex: 2, alignItems: 'center' }} >
          <Image source={profilePic} style={styles.image} />
          
          <Text style={styles.textName} >
            Client's Name
          </Text>
        </View>
  
        <View style={{ flex: 3, justifyContent: 'center' }} >
          <View style={styles.button} >
            <TouchableOpacity onPress={this.props.propGotoOrderHistory} >  
              <Text style={styles.textButton} >
                Order History
              </Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.button} >
            <TouchableOpacity onPress={this.props.propGotoChangeInfo} >
              <Text style={styles.textButton} >
                Change Info
              </Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.button} >
            <TouchableOpacity>
              <Text style={styles.textButton} >
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  
    const logoutScreen = (
      <View style={styles.container} >
        <Image source={profilePic} style={styles.image} />

        <TouchableOpacity onPress={this.props.propGotoAuthentication} > 
          <View style={styles.button} >
            <Text style={styles.textButton} >
                Signin
              </Text>
          </View>
        </TouchableOpacity>
  
      </View>
    );

    return (
      this.state.currentLogin ? loginScreen : logoutScreen
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0fbc88',
    alignItems: 'center',
    borderRightWidth: 3,
    borderColor: 'white',
  },

  image: {
    width: height * 0.2,
    height: height * 0.2,
    margin: 20,
    borderRadius: 100,
  },

  textName: {
    fontSize: height * 0.03,
    color: 'white'
  },

  button: {
    backgroundColor: 'white',
    width: height * 0.25,
    height: height * 0.06,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },

  textButton: {
    fontSize: height * 0.025,
    color: '#0fbc88',
  }
});

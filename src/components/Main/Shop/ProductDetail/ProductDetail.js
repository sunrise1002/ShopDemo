import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class ProductDetail extends Component {
  
  goBack() {
    this.props.navigation.goBack();
  }
  
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Text>
          Product Detail Component
        </Text>

        <TouchableOpacity onPress={() => this.goBack()} >
          <Text>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    TextInput,
    Platform
  } from 'react-native';

const { width, height } = Dimensions.get('window');

/* eslint-disable global-require */ //Khong co dong nay thi require link anh se bi loi
export default class SignIn extends Component {
    
    textInputEmail() {
        if (Platform.OS === 'android') {
            return (
                <TextInput 
                    style={styles.textInput} 
                    underlineColorAndroid={'transparent'} 
                    placeholder={'Enter your email'}
                    placeholderTextColor={'#e3e8ef'}
                />
            );
        }
        
        return (
            <TextInput 
                style={styles.textInput} 
                placeholder={'Enter your email'}
                placeholderTextColor={'#e3e8ef'}
            />
        );
    }   
    
    textInputPassword() {
        if (Platform.OS === 'android') {
            return (
                <TextInput 
                style={styles.textInput} 
                underlineColorAndroid={'transparent'} 
                placeholder={'Enter your password'}
                placeholderTextColor={'#e3e8ef'}
                secureTextEntry
                />
            );
        }
        
        return (
            <TextInput 
                style={styles.textInput} 
                placeholder={'Enter your password'}
                placeholderTextColor={'#e3e8ef'}
                secureTextEntry
            />
        );
    }
    
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.containerTop}>
                    <TouchableOpacity onPress={this.props.goBackToMainProp} >
                        <Image 
                        source={require('../../media/appIcon/back_white.png')} 
                        style={styles.icon}
                        />
                    </TouchableOpacity>

                    <Text
                        style={styles.textTop}
                    >
                        Wearing a Dress
                    </Text>

                    <Image 
                        source={require('../../media/appIcon/ic_logo.png')} 
                        style={styles.icon}
                    />
                </View>

                <View style={styles.signInContainer} >
                    {this.textInputEmail()}
                    
                    {this.textInputPassword()}
                
                    <TouchableOpacity>  
                        <View style={styles.signInButtonContainer} >
                            <Text style={styles.signInText} >
                                SIGN IN NOW
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerBottom} >
                    <TouchableOpacity>
                        <View style={styles.buttonBottomLeft} >
                            <Text style={styles.textButtonBottomLeft} >
                                SIGN IN
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.goToSignUpProp} >  
                        <View style={styles.buttonBottomRight} >
                            <Text style={styles.textButtonBottomRight} >
                                SIGN UP
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#0fbc88'
    },
  
    containerTop: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10
    },
  
    icon: {
        width: height / 20,
        height: height / 20,
    },
  
    textTop: {
        color: 'white',
        fontSize: height * 0.035
    },
  
    signInContainer: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    textInput: {
      width: width - 50,
      height: height * 0.06,
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingLeft: 20,
    },
  
    signInButtonContainer: {
      backgroundColor: '#0fbc88',
      width: width - 50,
      height: height * 0.06,
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20
    },
  
    signInText: {
      fontSize: height * 0.025,
      color: 'white'
    },
  
    containerBottom: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginBottom: 30
    },
  
    buttonBottomLeft: {
      backgroundColor: 'white',
      height: height * 0.06,
      width: (width - 50) / 2,
      margin: 1,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonBottomRight: {
      backgroundColor: 'white',
      height: height * 0.06,
      width: (width - 50) / 2,
      margin: 1,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    textButtonBottomLeft: {
        fontSize: height * 0.025,
        color: '#0fbc88'
    },
  
    textButtonBottomRight: {
        fontSize: height * 0.025,
        color: '#cbd0d8'
    }  
});

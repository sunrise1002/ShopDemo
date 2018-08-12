import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions, 
    StyleSheet,
    Image,
    TextInput,
    Platform
} from 'react-native';

/* eslint-disable global-require */ //Khong co dong nay thi require link anh se bi loi
const { height } = Dimensions.get('window');

export default class Header extends Component {

    textinput() {
       if (Platform.OS === 'android') {
           return (
            <TextInput 
                style={styles.textInput} 
                underlineColorAndroid={'transparent'} 
                placeholder={'What do you want to buy ?'}
                placeholderTextColor={'#e3e8ef'}
            />
           );
        }
       
        return (
                <TextInput 
                    style={styles.textInput} 
                    placeholder={'What do you want to buy ?'}
                    placeholderTextColor={'#e3e8ef'}
                />
        );
    }
    
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.containerButton}>
                    
                    <TouchableOpacity onPress={this.props.propOpen}>
                        <Image 
                            source={require('../../../media/appIcon/ic_menu.png')} 
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <Text
                        style={styles.text}
                    >
                        Wearing a Dress
                    </Text>

                    <Image 
                        source={require('../../../media/appIcon/ic_logo.png')} 
                        style={styles.icon}
                    />
                    
                </View>

                {this.textinput()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height / 8, 
        backgroundColor: '#0fbc88'
    },

    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },

    icon: {
        width: height / 20,
        height: height / 20,
    },

    text: {
        color: 'white',
        fontSize: height / 30
    },

    textInput: {
        height: height / 20,
        backgroundColor: 'white',
        marginHorizontal: 10,
        paddingVertical: 0,
    }
});
/* eslint-enable global-require */

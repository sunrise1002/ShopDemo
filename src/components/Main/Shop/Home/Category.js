import React, { Component } from 'react';
import { 
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity
 } from 'react-native';
 import Swiper from 'react-native-swiper';

/* eslint-disable global-require */ //Khong co dong nay thi require link anh se bi loi
const littlePic = require('../../../../media/temp/little.jpg');
const maxiPic = require('../../../../media/temp/maxi.jpg');
const midiPic = require('../../../../media/temp/midi.jpg');

const { width, height } = Dimensions.get('window');
export default class Category extends Component {

    render() {
        return (
            <View style={styles.container} >
                
                <View style={styles.textContainer} >
                    <Text style={styles.text} >
                        LIST OF CATEGORY
                    </Text>
                </View>
                <View style={styles.bannerContainer} >
                    <Swiper style={styles.swiper} >
                        <TouchableOpacity onPress={this.props.goToListProductProp} >
                            <ImageBackground source={littlePic} style={styles.imageBackground} >
                                <Text style={styles.textOnPic} >
                                    Little Dress
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.props.goToListProductProp} >
                            <ImageBackground source={maxiPic} style={styles.imageBackground} >
                                <Text style={styles.textOnPic} >
                                    Maxi Dress
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.props.goToListProductProp} >
                            <ImageBackground source={midiPic} style={styles.imageBackground} >
                                <Text style={styles.textOnPic} >
                                    Midi Dress
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Swiper>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.36,
        backgroundColor: 'white',
        margin: 10,
        elevation: 2, //only for Android, for iOS use shadowColor, shadowOffset, shadowOpacity
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },

    text: {
        fontSize: height * 0.03,
        color: '#c1c4c9',
        marginLeft: 7,
    },

    bannerContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    banner: {
        width: width - 30,
        height: (((width - 30) / 933) * 465) - 5,
    },

    swiper: {
        width: width - 30,
        height: ((width - 30) / 2) - 5
    },

    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 30,
        height: ((width - 30) / 2) - 5
    },

    textOnPic: {
        fontSize: height * 0.03,
        color: '#c7ced8'
    }
});

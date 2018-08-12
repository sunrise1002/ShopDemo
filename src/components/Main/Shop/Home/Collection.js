import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
 } from 'react-native';

/* eslint-disable global-require */ //Khong co dong nay thi require link anh se bi loi
const { width, height } = Dimensions.get('window');
 export default class Collection extends Component {

     render() {
         return (
             <View style={styles.container} >
                <View style={styles.textContainer} >
                    <Text style={styles.text} >
                        SPRING COLLECTION
                    </Text>
                </View>
                <View style={styles.bannerContainer} >
                    <Image 
                        source={require('../../../../media/temp/banner.jpg')}
                        style={styles.banner}
                    />
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
        flexDirection: 'column'
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
    }
});

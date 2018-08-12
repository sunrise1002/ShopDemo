import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
 } from 'react-native';

 /* eslint-disable global-require */ //Khong co dong nay thi require link anh se bi loi
const pic1 = require('../../../../media/temp/sp1.jpeg');
const pic2 = require('../../../../media/temp/sp2.jpeg');
const pic3 = require('../../../../media/temp/sp3.jpeg');
const pic4 = require('../../../../media/temp/sp4.jpeg');

const { width, height } = Dimensions.get('window');

export default class TopProduct extends Component {
    
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text} >
                    TOP PRODUCT
                </Text>
                
                <View style={styles.containerRow} >
                    <TouchableOpacity onPress={this.props.goToProductDetailProp} >
                        <View style={styles.containerProduct} >
                            <Image source={pic1} style={styles.image} />
                            <Text style={styles.textProductName} >
                                PRODUCT NAME
                            </Text>
                            <Text style={styles.textPrice} >
                                399 $
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.goToProductDetailProp} >
                        <View style={styles.containerProduct} >
                            <Image source={pic2} style={styles.image} />
                            <Text style={styles.textProductName} >
                                PRODUCT NAME
                            </Text>
                            <Text style={styles.textPrice} >
                                399 $
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerRow} >
                    <TouchableOpacity onPress={this.props.goToProductDetailProp} >
                        <View style={styles.containerProduct} >
                            <Image source={pic3} style={styles.image} />
                            <Text style={styles.textProductName} >
                                PRODUCT NAME
                            </Text>
                            <Text style={styles.textPrice} >
                                399 $
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.goToProductDetailProp} >
                        <View style={styles.containerProduct} >
                            <Image source={pic4} style={styles.image} />
                            <Text style={styles.textProductName} >
                                PRODUCT NAME
                            </Text>
                            <Text style={styles.textPrice} >
                                399 $
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
        backgroundColor: 'white',
        margin: 10,
        elevation: 2, //only for Android, for iOS use shadowColor, shadowOffset, shadowOpacity
    },

    text: {
        fontSize: height * 0.03,
        color: '#c1c4c9',
        marginLeft: 7,
        marginVertical: 7
    },

    containerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    containerProduct: {
        width: (width - 40) / 2,
        elevation: 2,
        marginBottom: 10,
        backgroundColor: 'white'
    },

    image: {
        width: (width - 40) / 2,
        height: (((width - 40) / 2) / 361) * 452
    },

    textProductName: {
        fontSize: height * 0.03,
        color: '#b9c0cc',
        marginLeft: 10,
    },

    textPrice: {
        fontSize: height * 0.025,
        color: '#0fbc88',
        marginLeft: 10,
    }
});

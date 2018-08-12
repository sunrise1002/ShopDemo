import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';

const { width, height } = Dimensions.get('window');
const backButton = require('../../../../media/appIcon/backList.png');
const item = require('../../../../media/temp/sp1.jpeg');

export default class ListProduct extends Component {
  
  goToProductDetail() {
    this.props.navigation.navigate({ routeName: 'PRODUCT_DETAIL' });
  }

  goBack() {
    this.props.navigation.goBack();
  }
  
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.topContainer} >   
          <TouchableOpacity onPress={() => this.goBack()} >
            <Image source={backButton} style={styles.backButton} />
          </TouchableOpacity>

          <Text style={styles.textTop} >
            Party Dress
          </Text> 
          
          <View style={styles.backButton} />
        </View>

        <ScrollView >
          <View >
            <View style={styles.line} />

            <View style={styles.itemContainer}>
              <Image source={item} style={styles.imageItem} />
              
              <View style={styles.itemContent} >
                <Text style={styles.textNameItem} >
                  Lace Sleeve Si
                </Text>

                <Text style={styles.textPrice} >
                  117$
                </Text>

                <Text style={styles.textMaterial} >
                  Material silk
                </Text>

                <View style={styles.bottomTextContainer} >
                  <Text style={styles.textcolor} >
                    Color RoyalBlue
                  </Text>

                  <View style={styles.viewColor} />

                  <TouchableOpacity onPress={() => this.goToProductDetail()} >
                    <Text style={styles.textShowDetails} >
                      SHOW DETAILS
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View >
            <View style={styles.line} />

            <View style={styles.itemContainer}>
              <Image source={item} style={styles.imageItem} />
              
              <View style={styles.itemContent} >
                <Text style={styles.textNameItem} >
                  Lace Sleeve Si
                </Text>

                <Text style={styles.textPrice} >
                  117$
                </Text>

                <Text style={styles.textMaterial} >
                  Material silk
                </Text>

                <View style={styles.bottomTextContainer} >
                  <Text style={styles.textcolor} >
                    Color RoyalBlue
                  </Text>

                  <View style={styles.viewColor} />

                  <TouchableOpacity onPress={() => this.goToProductDetail()} >
                    <Text style={styles.textShowDetails} >
                      SHOW DETAILS
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View >
            <View style={styles.line} />

            <View style={styles.itemContainer}>
              <Image source={item} style={styles.imageItem} />
              
              <View style={styles.itemContent} >
                <Text style={styles.textNameItem} >
                  Lace Sleeve Si
                </Text>

                <Text style={styles.textPrice} >
                  117$
                </Text>

                <Text style={styles.textMaterial} >
                  Material silk
                </Text>

                <View style={styles.bottomTextContainer} >
                  <Text style={styles.textcolor} >
                    Color RoyalBlue
                  </Text>

                  <View style={styles.viewColor} />

                  <TouchableOpacity onPress={() => this.goToProductDetail()} >
                    <Text style={styles.textShowDetails} >
                      SHOW DETAILS
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View >
            <View style={styles.line} />

            <View style={styles.itemContainer}>
              <Image source={item} style={styles.imageItem} />
              
              <View style={styles.itemContent} >
                <Text style={styles.textNameItem} >
                  Lace Sleeve Si
                </Text>

                <Text style={styles.textPrice} >
                  117$
                </Text>

                <Text style={styles.textMaterial} >
                  Material silk
                </Text>

                <View style={styles.bottomTextContainer} >
                  <Text style={styles.textcolor} >
                    Color RoyalBlue
                  </Text>

                  <View style={styles.viewColor} />

                  <TouchableOpacity onPress={() => this.goToProductDetail()} >
                    <Text style={styles.textShowDetails} >
                      SHOW DETAILS
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    elevation: 2
  },

  topContainer: {
    flexDirection: 'row',
    height: height * 0.07,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backButton: {
    width: height * 0.045,
    height: height * 0.045,
  },

  textTop: {
    fontSize: height * 0.035,
    color: '#c12a70',
  },

  line: {
    backgroundColor: '#e0e0e0',
    height: 1,
    marginHorizontal: 10,
  },

  itemContainer: {
    height: height * 0.24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageItem: {
    height: height * 0.18,
    width: ((height * 0.18) / 452) * 361,
    margin: 15
  },

  itemContent: {
    justifyContent: 'space-between',
    height: height * 0.18,
  },

  textNameItem: {
    color: '#b5b5b5',
    fontSize: height * 0.03
  },

  textPrice: {
    color: '#c12a70',
    fontSize: height * 0.025
  },

  textMaterial: {
    fontSize: height * 0.02
  },

  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - (10 * 2) - (15 * 2) - 15 - (((height * 0.18) / 452) * 361)
  },

  textcolor: {
    fontSize: height * 0.02
  },

  viewColor: {
    backgroundColor: 'cyan',
    height: height * 0.025,
    width: height * 0.025,
    borderRadius: (height * 0.025) / 2
  },
  
  textShowDetails: {
    fontSize: height * 0.02,
    color: '#c12a70',
  }
});

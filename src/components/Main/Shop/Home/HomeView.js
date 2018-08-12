import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';


export default class Home extends Component {
    
    goToListProduct() {
        this.props.navigation.navigate({ routeName: 'LIST_PRODUCT' });  
    }

    goToProductDetail() {
        this.props.navigation.navigate({ routeName: 'PRODUCT_DETAIL' });
    }
    
    render() {
        return (
            <ScrollView style={{ flex: 1 }} >
                <Collection />
                <Category goToListProductProp={() => this.goToListProduct()} />
                <TopProduct goToProductDetailProp={() => this.goToProductDetail()} />
            </ScrollView>
        );
    }
}


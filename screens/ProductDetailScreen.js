import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
  return (
    <View style={StyleSheet.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const ProductDetailScreen = props => {
  const availableProducts = useSelector(state => state.products.products)

  const productId = props.navigation.getParam('productId');

  const selectedProduct = availableProducts.find(product => product.id === productId);

  return (
    <ScrollView>
      <Image />
      <View>
        <DefaultText></DefaultText>
        <DefaultText></DefaultText>
        <DefaultText></DefaultText>
      </View>
      <Text></Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = navigationData => {
  const productTitle = navigationData.navigation.getParam('productTitle');

  return {
    headerTitle: productTitle,
  };
};

const styles = StyleSheet.create({
  title: {},
  image: {},
  details: {},
  listItem: {}
});

export default ProductDetailScreen;
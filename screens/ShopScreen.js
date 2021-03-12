import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import ProductList from '../components/ProductList';
import DefaultText from '../components/DefaultText';

const ShopScreen = props => {
  const availableProducts = useSelector(state => state.products.products);

  if (availableProducts.length === 0) {
    <View style={styles.content}>
      <DefaultText>Uh oh! It appears that there are no available products. Please add a product.</DefaultText>
    </View>
  }

  return (
    <ProductList listData={availableProducts} navigation={props.navigation} />
  );
};

ShopScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Products'
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ShopScreen;
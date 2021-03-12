import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from './ProductItem';

const ProductList = props => {
  const renderProductItem = itemData => {
    
    return <ProductItem 
      title={itemData.item.title}
      onSelectProduct={() => console.log('You clicked a future item')}
      description={itemData.item.description}
      price={itemData.item.price}
      imageUrl={itemData.item.imageUrl}
    />;
  }
  
  return (
    <View style={styles.list}>
      <FlatList 
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 list: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});

export default ProductList;
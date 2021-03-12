import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';

import DefaultText from '../components/DefaultText';
import { createStore } from 'redux';

const ProductItem = props => {
  return (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={props.onSelectProduct}>
        <View>
          <View style={{...styles.productRow, ...styles.productHeader}}>
            <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
              <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.productRow, ...styles.productDetail}}>
            <TouchableOpacity>
              <DefaultText>Details</DefaultText>
            </TouchableOpacity>
            <DefaultText>{props.price}</DefaultText>
            <TouchableOpacity>
              <DefaultText>Add to Cart</DefaultText>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#eee'
  },
  productRow: {
    flexDirection: 'row'
  },
  productHeader: {
    height: '85%',
  },
  productDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    fontFamily: 'PlayfairDisplay_400Regular',
    color: '#fff',
    backgroundColor: Colors.tertiaryColor,
    padding: 2
  }
});

export default ProductItem;
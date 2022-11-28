import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ItemClick = ({route}) => {
  const {productId, productName, productImage} = route.params;
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
      <Text>ItemClick: {productId}</Text>
      <Text>ItemClick: {productName}</Text>
      <Image source={{uri: productImage}} style={styles.itemImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default ItemClick;

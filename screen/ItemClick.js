import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ItemClick = ({route}) => {
  const {productId, productName, productImage, thumbnailUrl} = route.params;
  return (
    <>
      <View style={styles.container}>
        <Image source={{uri: productImage}} style={styles.itemImage} />
        <Text style={styles.textStyle}>ProductId: {productId}</Text>
        <Text style={styles.subTextStyle}>ProductName: {productName}</Text>
      </View>
      <View style={styles.subContainer}>
        <Image source={{uri: thumbnailUrl}} style={styles.subItemImage} />
        <Image source={{uri: thumbnailUrl}} style={styles.subItemImage} />
        <Image source={{uri: thumbnailUrl}} style={styles.subItemImage} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#5c4d79',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#5c4d79',
  },
  textStyle: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTextStyle: {
    margin: 10,
    fontSize: 18,
  },
  itemImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  subItemImage: {
    width: '30%',
    height: 100,
    resizeMode: 'cover',
    borderWidth: 4,
    borderRadius: 5,
  },
});

export default ItemClick;

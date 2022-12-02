import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ItemClick = ({route}) => {
  const navigation = useNavigation();
  const {productId, productName, productImage, thumbnailUrl} = route.params;
  const navigateNext = () => {
    navigation.navigate('NextItem', {
      detailsImage: thumbnailUrl,
    });
  };
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
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Pressable style={styles.btnStyle} onPress={navigateNext}>
          <Text style={styles.text}>Buy Product</Text>
        </Pressable>
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
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: '50%',
    backgroundColor: '#5c4d79',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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

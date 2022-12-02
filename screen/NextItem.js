import {StyleSheet, Image, View, Pressable, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const NextItem = ({route}) => {
  const {detailsImage} = route.params;
  const navigation = useNavigation();
  const navigateNext = () => {
    navigation.navigate('LastItem');
  };
  return (
    <>
      <View style={styles.subContainer}>
        <Image source={{uri: detailsImage}} style={styles.subItemImage} />
        <Image source={{uri: detailsImage}} style={styles.subItemImage} />
        <Image source={{uri: detailsImage}} style={styles.subItemImage} />
      </View>
      <View style={styles.subContainer}>
        <Image source={{uri: detailsImage}} style={styles.subItemImage} />
        <Image source={{uri: detailsImage}} style={styles.subItemImage} />
        <Image source={{uri: detailsImage}} style={styles.subItemImage} />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Pressable style={styles.btnStyle} onPress={navigateNext}>
          <Text style={styles.text}>Last Screen</Text>
        </Pressable>
      </View>
    </>
  );
};

export default NextItem;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#5c4d79',
  },
  subItemImage: {
    width: '30%',
    height: 100,
    resizeMode: 'cover',
    borderWidth: 4,
    borderRadius: 5,
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
});

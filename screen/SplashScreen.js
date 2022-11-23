import React, {useRef, useState} from 'react';
import {View, StyleSheet, StatusBar, Alert} from 'react-native';
import LottieView from 'lottie-react-native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 3000);
  }, []);

  const onAnimationFinish = () => {
    setAnimationLoaded(true);
  };

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      console.log('Get Login Value:', value);
      if (value !== null) {
        props.navigation.replace('DashBoard');
      } else {
        props.navigation.replace('Home');
      }
    } catch (e) {
      Alert.alert('Failed to fetch the input from storage');
    }
  };

  useEffect(() => {
    if (authLoaded && animationLoaded) {
      readData();
      //props.navigation.replace('Home');
    }
  }, [authLoaded, animationLoaded, props.navigation]);

  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor="transparent" />
      <LottieView
        ref={animation => {
          ref.current = animation;
        }}
        style={styles.lottieView}
        source={require('../assets/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default SplashScreen;
